var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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

router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibido:' + req.params.id);
});

module.exports = router;
