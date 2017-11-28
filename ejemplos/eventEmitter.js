'use strict';

const EventEmitter = require('events');

// creamos un emisor de eventos
const emisor = new EventEmitter();

emisor.on('llamar telefono', suenaTelefono);
emisor.once('llamar telefono', vibrarTelefono); // con once nos suscribimos solo a la primera vez que salte el evento

function suenaTelefono(quien) {
  if (quien === 'madre') {
    return;
  }
  console.log('ring ring');
}

function vibrarTelefono(quien) {
  console.log('brr brr');
}

// emitimos el evento
emisor.emit('llamar telefono', 'madre');

process.stdin.on('data', function(data) {
  console.log('He recibido', data);
})