'use strict';

function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie
// llamar a una función asíncrona n veces en serie
function serie(n, fn, callbackFinalizador) {
  if (n === 0) {
    callbackFinalizador(); // avisamos de quye hemos terminado
    return; // evitamos que siga ejecutandose más veces
  }
  n = n - 1;
  fn('texto' + n, function() {
    serie(n, fn, callbackFinalizador);
  })
}

serie(5, escribeTras2Segundos, function() {
  console.log('terminado');
});
