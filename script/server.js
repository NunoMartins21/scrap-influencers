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

        this.server.listen(this.port);

        this.socket.on('connection', (socket)=>{
            console.log('Connection established');
            socket.on('message', (msg) => {
                console.log("From client: " + msg.toString())
            });
        });
    }
}

module.exports = Server;