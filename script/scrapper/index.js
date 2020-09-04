require('dotenv').config();
import axios from 'axios';
import settings from '../settings';

export default class Scrapper {
    /**
     * **Scrapper**: responsible for scrapping and handling scrapped data from Instagram.
     * * scraps data from given hashtags
     * @param {*} hashtags 
     */
    constructor(hashtags=settings.scrapper.hashtags) {
        this.hashtag_url = x => `https://www.instagram.com/explore/tags/${x}`;
        this.get_profile_url = x => `https://i.instagram.com/api/v1/users/${x}/info/`;
        this.user_url = x => `https://www.instagram.com/${x}`;
        this.headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; motorola one Build/OPKS28.63-18-3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36 Instagram 72.0.0.21.98 Android (27/8.1.0; 320dpi; 720x1362; motorola; motorola one; deen_sprout; qcom; pt_BR; 132081645)'
        }
        this.hashtags = hashtags;
    }

    /**
     * **startScrapping()**: method that scraps info from Instagram using the given hashtags (when instantiating the object). Asynchronous method, given that the requests need time to be handled. For each post scrapped there's a ``setTimeout()`` set to 5000 milisseconds (5 seconds), and for each hashtag there's a ``setTimeout()`` set to 10000 milisseconds (10 seconds).
     * 
     * **Returns:** a JSON with the following structure:
     * ``{
     * statusCode: Number,
     * scrapped: Number,
     * influencers: { hashtag1: [], ... }
     * }``
     * 
     * In case of an error, it returns a JSON with the following structure:
     * ``{
     * statusCode: 0,
     * error: String
     * }``
     * 
     * @param {Array<String>} hashtags
     */
    async startScrapping(hashtags=this.hashtags) {
        try {
            /**
             * Info about **statusCode**:
             * * **code 0**: failed
             * * **code 1**: success
             * * **code 2**: debug/special conditions
             */
            let res = {
                statusCode: 1,
                scrapped: 0,
                influencers: {}
            }

            // Scrapping each hashtag
            for (const hashtag of hashtags) {
                // Fetching and parsing Instagram's response
                const response = await axios.get(this.hashtag_url(hashtag), { headers: this.headers });
                const json = JSON.parse(await response.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)).entry_data;
    
                const posts = json.TagPage[0].graphql.hashtag.edge_hashtag_to_top_posts.edges;
    
                // Scrapping each post
                for (const post of posts) {
                    let influencer = {
                        'id': post.node.owner.id,
                    }
    
                    // Fetching and parsing Instagram's response
                    let user_req = await axios.get(this.get_profile_url(influencer.id), { headers: this.headers });
                    influencer.handle = user_req.data.user.username;

                    // Fetching and parsing Instagram's response
                    let user_info_req = await axios.get(this.user_url(influencer.handle));
                    let user_data = JSON.parse(await user_info_req.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)).entry_data.ProfilePage[0].graphql.user;

                    // Adding parsed response to the influencer object
                    influencer.name = user_data.full_name;
                    influencer.bio = user_data.biography;
                    influencer.email = influencer.bio.match(/[\w\.-]+@[\w\.-]+\.\w+/gm);
                    influencer.verified = user_data.is_verified;
                    influencer.followers = user_data.edge_followed_by.count;
                    influencer.following = user_data.edge_follow.count;
                    influencer.category = (user_data.is_business_account ? user_data.business_category_name : null);

                    // Add scrapped influencer to object
                    if (Array.isArray(res.influencers[hashtag])) {
                        res.influencers[hashtag].push(influencer);
                    }
                    else {
                        res.influencers[hashtag] = [];
                    }

                    // Increase "scrapped" counter
                    res.scrapped = res.scrapped + 1;

                    setTimeout(() => {}, 5000);
                }
                setTimeout(() => {}, 10000);
            }

            return res;
        } catch (err) {
            return {
                statusCode: 0,
                error: err.toString()
            }
        }
    }
}