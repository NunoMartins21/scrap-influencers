/**
 * Como o script funciona?
 *      1. liga servidor/websocket
 *      2. (opcional) estabelece conexão com DB (Mongo/Firebase/MySQL)
 *      3. começa o scrapping
 *      4. (opcional) envia os dados para a DB
 *      5. envia os dados por websocket ao cliente
 */

const dotenv = require('dotenv');
dotenv.config();

const Scrapper = require('./scrapper');
const scrapper = new Scrapper(["beauty", "makeup"]);

scrapper.startScrapping()
        .then(res => {
            console.log(JSON.stringify(res, null, 1));
        });