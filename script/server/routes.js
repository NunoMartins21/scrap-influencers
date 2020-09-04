import { Router } from 'express'

/**
 * **Routes**: a class which organizes routers for Express. All methods are ``static`` and this class cannot be instantiated (*well, it doesn't even make any sense whatsoever*).
 * 
 * All these methods return a ``Router`` object, which can be used with ``app.use(path, router)``, with ``router`` being the object returned.
 */
export default class Routes {
    /**
     * **scrapper():** all the ``/scrapper`` routes.
     * 
     * **Current routes:**
     * * ``/scrapper``
     *     * ``GET /start``
     *     * ``GET /hashtags``
     *     * ``POST /hashtags/add?array=[...]``
     *     * ``UPDATE /hashtags/edit?array=[...]``
     *     * ``DELETE /hashtags/delete?array=[...]``
     */
    static scrapper() {
        let router = Router();

        router.get('/start', (req, res) => {

        });

        router.get('/hashtags', (req, res) => {
            res.json({
                statusCode: 0,
                hashtags: hashtags
            });
        });

        router.post('/hashtags/add', (req, res) => {
            let hashtags = req.query.array;
        });

        router.update('/hashtags/edit', (req, res) => {

        });

        router.delete('/hashtags/delete', (req, res) => {

        })

        return router;
    }

    /**
     * **database():** all the ``/database`` routes.
     * 
     * **Current routes:**
     * * ``/database``
     *     * ``GET /connect``
     *     * ``GET /dump``
     *     * ``GET /disconnect``
     *     * ``GET /info``
     */
    static database() {
        let router = express.Router();

        router.get('/connect', (req, res) => {

        });

        router.get('/dump', (req, res) => {

        });

        router.get('/disconnect', (req, res) => {

        });

        router.get('/info', (req, res) => {

        });

        return router;
    }

    /**
     * **socket():** all the ``/socket`` routes.
     * 
     * **Current routes:**
     * * ``/socket``
     *     * ``GET /start``
     *     * ``GET /stop``
     */
    static socket() {
        let router = Router();

        router.get('/start', (req, res) => {

        });

        router.get('/stop', (req, res) => {

        });

        return router;
    }
}