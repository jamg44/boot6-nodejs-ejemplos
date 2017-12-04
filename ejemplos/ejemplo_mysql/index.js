'use strict';

// cargamos el driver de mysql
const mysql = require('mysql');

// crear una conexión
const conexion = mysql.createConnection({
  host: 'didimo.es',
  user: 'usuariocurso',
  password: 'us3r',
  database: 'cursonode'
});

// establecemos conexión
conexion.connect();

// lanzamos una consulta
conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
  if (err) {
    console.log('Hubo un error', err);
    process.exit(1);
  }
  for(let i = 0; i < rows.length; i++) {
    const agente = rows[i];
    console.log(agente.idagentes, agente.name, agente.age);
  }

  // cerramos la conexión
  conexion.end();

});

// si cerramos la conexión aqui, aunque no es correcto, funcionará porque el driver de MySQL nos lo arregla
