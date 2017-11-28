'use strict';

// constructor de objetos de tipo Persona
function Persona(nombre) {
  this.nombre = nombre;
  // this.saluda = function() {
  //   console.log('Hola me llamo', this.nombre);  
  // }
}

// construir un objeto de tipo Persona
const luis = new Persona('Luis');

// añadir propiedades y métodos al prototipo de las personas
Persona.prototype.saluda = function() {
  console.log('Hola me llamo', this.nombre);
}

luis.saluda();

const pedro = new Persona('Pedro');

pedro.saluda();

// Herencia de Persona ---------------------------------------

function Agente(name){
  Persona.call(this, name); // heredamos construstor de personas
}

// heredar las propiedades y metodos del prototipo
Agente.prototype = new Persona('soy un prototipo');

const smith = new Agente('Smith');

smith.saluda();

console.log( 
  smith instanceof Agente,
  smith instanceof Persona,
  smith instanceof Object
  );

// Herencia múltiple ------------------------------------------

// Mixin Superheroe
function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  }
  this.esquivaBalas = function() {
    console.log(this.nombre, 'esquiva balas');
  }
}

// copiamos todas las propiedades de Supperheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();
