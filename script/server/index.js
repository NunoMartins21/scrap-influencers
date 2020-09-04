import express from 'express'
import cors from 'cors'
import Routes from './routes'

/**
 * **Server:** an Express REST API implementation in a class. All the important variables are part of the class (hence, attributes), which makes this API easy to modify and scale.
 * 
 * The API returns a JSON object with a ``statusCode`` (HTTP Request Codes) and the content (error/requested information).
 * 
 * **Current routes:**
 * * ``/scrapper``
 *     * ``GET /start``
 *     * ``GET /hashtags``
 *     * ``POST /addHashtags?array=[...]``
 *     * ``UPDATE /editHashtags?array=[...]``
 *     * ``DELETE /deleteHashtags?array=[...]``
 * * ``/database``
 *     * ``GET /connect``
 *     * ``GET /dump``
 *     * ``GET /disconnect``
 *     * ``GET /info``
 * * ``/socket``
 *     * ``GET /start``
 *     * ``GET /stop``
 */
export default class Server {
    constructor(api_port=3000) {
        this.app = express();
        this.port = process.env.API_PORT || api_port;

        // Middlewares
        this.app.use(cors());
        this.app.use(express.json());

        // Routes
        this.app.use('/scrapper', Routes.scrapper());
        this.app.use('/database', Routes.database());
        this.app.use('/socket', Routes.socket());

        this.app.listen(this.port, () => {
            console.log(`[API]: listening on port ${this.port}`);
        })
    }
}