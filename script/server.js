require('dotenv/config')
const express = require('express')
const http = require('http')
const io = require('socket.io')

class Server {
    constructor(port) {
        this.app = express();
        this.port = process.env.IO_PORT || port;
        this.server = http.createServer(this.app);
        this.socket = io(this.server);

        this.server.listen(this.port, () => {
            console.log(`Socket opened on http://localhost:${this.port}/`);
        });

        this.socket.on('connection', (socket)=>{
            console.log('Connection established');
            socket.on('message', (msg) => {
                console.log("From client: " + msg.toString())
            });
        });
    }

    /**
     * receive(event, handler)
     * Allows the socket to receive clients' messages and use them with a callback (handler())
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

    emitScrapping(data) {
        this.socket.emit('scrapping', data)
            .then(() => {
                console.log("[Server.emitScrapping()]: dados emitidos para o cliente com êxito!");
            })
            .catch(err => {
                console.log(`[ERRO]: ${err}`);
            });
    }
}

module.exports = Server;