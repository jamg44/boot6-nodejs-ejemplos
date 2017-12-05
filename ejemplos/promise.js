'use strict';

// función que retorna una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    // aqui va el código que hará resolverse o rechazarse la promesa
    setTimeout(() => {
      resolve(55);
      //reject(new Error('fatal'));
    }, ms);
  });
}

// consumir la promesa
const promesa = sleep(1000);

//console.log(promesa);

promesa.then(data => {
  console.log('la promesa se completó con', data);
}).catch(err => {
  console.log('promesa rechazada', err);
});

console.log('al final');
