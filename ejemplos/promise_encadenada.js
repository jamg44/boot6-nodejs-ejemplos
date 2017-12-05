'use strict';

// Funciones que devuelven promesas

function conArroz(plato) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' arroz');
  });
}

function conAjo(plato) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' ajo');
    //reject(new Error('no queda ajo'));
  });
}

function con(plato, ingrediente) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' ' + ingrediente);
  });
}

// encadenar las funciones que devuelven promesas

const paella = 'paella con';

conArroz(paella)
  .then(conAjo)
  .then(plato => {
    // retornar una promesa para que siga la cadena
    return con(plato, 'pollo');
  })
  .then(plato => {
    console.log('El resultado es:', plato);
  }).catch(err => {
    // este catch se activa si falla cualquiera de la promesas anteriores
    console.log('Hubo un fallo:', err);
  });
