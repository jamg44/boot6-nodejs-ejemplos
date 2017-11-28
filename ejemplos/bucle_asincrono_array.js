'use strict';

function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie
// llamar a una función asíncrona procesando un array en serie
function serie(arr, fn, callbackFinalizador) {
  if (arr.length === 0) {
    callbackFinalizador(); // avisamos de quye hemos terminado
    return; // evitamos que siga ejecutandose más veces
  }
  fn('texto' + arr.shift(), function() {
    serie(arr, fn, callbackFinalizador);
  })
}

serie([1,2,3,4,6], escribeTras2Segundos, function() {
  console.log('terminado');
});
