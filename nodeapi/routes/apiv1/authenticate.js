'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
  // recogemos las credenciales
  const email = req.body.email;
  const password = req.body.password;

  // Buscamos en la base de datos en usuario
  // ...
  // simulamos que buscamos
  if (email !== 'user@example.com' || password !== '1234') {
    res.status = 401;
    res.json({ error: 'Credenciales incorrectas'});
    return;
  }

  const user = { _id: 'kj3h21kj3h12k'};

  // si el usuario existe y la password coincide
  // creamos un token
  // no firmar objetos de mongoose, usar mejor un nuevo objeto solo con lo mínimo
  jwt.sign({ user_id: user._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  }, (err, token) => {
    if (err) {
      next(err);
      return;
    }

    // y lo devolvemos
    res.json({ success: true, token: token});
  });

});

module.exports = router;
