/**
 * Como o script funciona?
 *      1. liga servidor/websocket
 *      2. (opcional) estabelece conexão com DB (Mongo/Firebase/MySQL)
 *      3. começa o scrapping
 *      4. (opcional) envia os dados para a DB
 *      5. envia os dados por websocket ao cliente
 */

import dotenv from 'dotenv';
import Server from './server';

dotenv.config();
const server = new Server();