'use strict';

const mongoose = require('mongoose');

// primero creamos el esquema
const agenteSchema = mongoose.Schema({
  name: { type: String, index: true },
  age: Number
});

// Creamos un método estático
agenteSchema.statics.list = function(filters, limit, skip, sort, fields) {
  // obtenemos la query sin ejecutarla
  const query = Agente.find(filters);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort)
  query.select(fields);
  // ejecutamos la query y devolvemos una promesa
  return query.exec();
}

// y por último creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// y lo exportamos
module.exports = Agente;
