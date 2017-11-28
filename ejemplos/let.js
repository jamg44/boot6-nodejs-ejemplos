var variable;

let otraVariable;

if (true) {
  var existe = 'si';
  // block scoped variables
  let soloEnBloque = 5; 
  const constanteSoloEnBloque = 22;
}

console.log(existe);

const objeto = { // lo que es constante y no puedo cambiar es el objeto, pero su contenido si puedo cmabiarlo
  propiedadQueSiPuedoCambiar: 99
}

