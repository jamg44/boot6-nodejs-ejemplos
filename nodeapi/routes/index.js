var express = require('express');
var router = express.Router();

const { query, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const segundo = (new Date()).getSeconds();

  res.locals.valor = '<script>alert("inyección de codigo!")</script>';
  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0
  };
  res.locals.users = [
    { name: 'Smith', age: 22 },
    { name: 'Thomas', age: 32 },
    { name: 'Jones', age: 27 }
  ];

  res.render('index', { title: 'Express' });
});

// Recibiendo parámetros en la ruta
router.get('/paramenruta/:dato', function(req, res, next) {
  console.log('req.params', req.params);
  res.send('ok recibido:' + req.params.dato);
});

router.get('/paramenrutaopcional/:dato?', function(req, res, next) {
  console.log('req.params', req.params);
  res.send('ok recibido:' + req.params.dato);
});

// [0-9]+ - uno o más dígitos entre 0 y 9
router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibido:' + req.params.id);
});

// Recibiendo parámetros en query-string
router.get('/paramenquery', [
  query('age').isNumeric().withMessage('must be numeric')
], (req, res, next) => {
  console.log('req.query', req.query);
  validationResult(req).throw();
  // los parámetros siempre son string
  res.send('ok');
});

// Recibiendo parámetros en el body
router.put('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok');
});

module.exports = router;
