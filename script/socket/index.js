const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const http = require('http')
const io = require('socket.io')

class Socket {
    constructor(ws_port=9000) {
        this.app = express();
        this.ws_port = process.env.WS_PORT || ws_port;
        this.server = http.createServer(this.app);
        this.socket = io(this.server);

        // Socket
        this.server.listen(this.ws_port, () => {
            console.log(`Socket opened on http://localhost:${this.ws_port}/`);
        });

        this.socket.on('connection', (socket)=>{
            console.log('Connection established');
        });
    }

    /**
     * **receive(event, handler)**: Allows the socket to receive clients' messages and use them with a callback ``handler()``
     * @param {string} event 
     * @param {function} handler
     */
    receive(event, handler) {
        this.socket.on(event, msg => {
            handler(msg.toString())
        });
    }

    receiveUpdate(handler) {
        this.receive('update', handler);
    }

    /**
     * **emitScrapping(data, type)**: Emits specific data to the client. Doesn't require callback.
     * * type can either be 'console' or 'data'
     * @param {JSON} data 
     * @param {string} type 
     */
    emitScrapping(data, type) {
        this.socket.emit(`scrapping ${type}`, data);
    }
}

module.exports = Socket;