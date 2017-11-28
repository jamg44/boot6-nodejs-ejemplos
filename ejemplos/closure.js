'use strict';

// patron factory, función que retorna un objeto haciendo closures
function creaAgente(nombre) {
  return {
    getNombre: function() {
      return nombre;
    },
    setNombre: function(valor) {
      nombre = valor;
    },
    saluda: function() {
      console.log('Hola soy', nombre);
    }
  }
}

const jones = creaAgente('Jones');
const smith = creaAgente('Smith');
//jones.saluda();

setTimeout(jones.saluda, 2000);
setTimeout(smith.saluda, 2000);