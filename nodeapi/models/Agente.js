'use strict';

const mongoose = require('mongoose');

// primero creamos el esquema
const agenteSchema = mongoose.Schema({
  name: { type: String, index: true },
  age: Number
}, {
  collection: 'agents'
});

// y por último creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);


// y lo exportamos
module.exports = Agente;
