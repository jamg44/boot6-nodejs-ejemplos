
console.log('inicializo mi libreria de pagos');

module.exports.APIKEY = 'asdadadsadasdas';

module.exports.pagar = function(cantidad) {
  console.log('Hemos pagado', cantidad, '€');
}

exports.devolver = function(cantidad) {
  console.log('Hemos devuelto', cantidad);
}

// module.exports = 5; // ok
// exports = 5; // noooo!