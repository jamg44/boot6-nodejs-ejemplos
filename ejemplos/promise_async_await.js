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

async function conMejillones(plato) {
  return plato + ' mejillones';
}

function con(plato, ingrediente) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' ' + ingrediente);
  });
}

// encadenar las funciones que devuelven promesas

const paella = 'paella con';

async function main() {
  // aqui podré utilizar await
  let plato = await conArroz(paella);
  // la siguiente linea se ejecutará cuando se resuelva la promesa
  plato = await conAjo(plato);
  plato = await conMejillones(plato);
  for(let i = 0; i < 5; i++) {
    plato = await con(plato, 'pollo');
  }
  //console.log('El resultado es:', plato);

  return plato;
}

main()
  .then(console.log)
  .catch(err => { console.log('Hubo un fallo:', err) });

// console.log('al final')

/*conArroz(paella)
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
*/