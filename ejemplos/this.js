'use strict';

const persona = {
  name: 'Luis',
  surname: 'Gomez',
  sayName: function() {
    console.log(this.name + ' ' + this.surname);
  }
};

//persona.sayName(); // en el momento de ejecutarlo, lo que tenga a la izquierda del punto será this

setTimeout(persona.sayName.bind(persona), 2000);

//const saluda = persona.sayName.bind(persona);

//saluda(); // en el momento de ejecutarlo, lo que tenga a la izquierda del punto será this
