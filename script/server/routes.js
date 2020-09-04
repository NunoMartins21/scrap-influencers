import { Router } from 'express';
import * as actions from '../actions';
import store from '../store';
import settings from '../settings';

import Scrapper from '../scrapper';

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
     *     * ``POST /hashtags/edit?array=[...]``
     *     * ``DELETE /hashtags/delete?array=[...]``
     */
    static scrapper() {
        let router = Router();

        router.get('/start', async (req, res, next) => {
            try {
                let scrapper = new Scrapper();
                store.dispatch(actions.scrapping(scrapper))
                    .then(() => {
                        const state = store.getState();
                        if (!state.scrapper.error) {
                            res.json({
                                statusCode: res.statusCode,
                                scrapped: state.scrapper.scrapped,
                                influencers: state.scrapper.influencers,
                                state: state
                            });
                        }
                        else {
                            next(state.scrapper.error)
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            statusCode: res.statusCode,
                            error: err
                        });
                    })
            }
            catch (err) {
                res.status(500).json({
                    statusCode: res.statusCode,
                    error: err.toString()
                });
            }
        });

        router.get('/hashtags', (req, res) => {
            res.json({
                statusCode: res.statusCode,
                hashtags: settings.scrapper.hashtags
            });
        });

        router.post('/hashtags/add', (req, res) => {
            let hashtags = req.query.array;
            res.json({
                statusCode: res.statusCode,
                success: true,
                msg: "Hashtags added successfully!"
            });
        });

        // TODO
        router.post('/hashtags/edit', (req, res) => {
            res.json({
                statusCode: res.statusCode,
            });
        });

        // TODO
        router.delete('/hashtags/delete', (req, res) => {
            res.json({
                statusCode: res.statusCode,
                deleted: true,
                msg: "Hashtags deleted successfully!"
            });
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
        let router = Router();

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