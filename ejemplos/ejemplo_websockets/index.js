'use strict';

const app = require('express')();
const server = require('http').Server(app);

// Chuleta de Socket.io
// http://stackoverflow.com/questions/10058226/send-response-to-all-clients-except-sender-socket-io

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

// cargar socket.io y configurarlo
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg); // sending to all clients, include sender
  })
});

server.listen(3000, () => {
  console.log('Arrancado en el puerto 3000');
});
