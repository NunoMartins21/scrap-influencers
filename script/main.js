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

import * as actions from './actions/scrappingActions'
import store from './store'
import Scrapper from './scrapper'

import settings from './settings'
import axios from 'axios'
import fs from 'fs'

dotenv.config();
const server = new Server();