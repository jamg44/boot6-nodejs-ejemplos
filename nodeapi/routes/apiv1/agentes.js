'use strict';

const express = require('express');
const router = express.Router();

// cargar el modelo de Agente
const Agente = require('../../models/Agente');

/**
 * POST /agentes
 * Crea un agente
 */
router.post('/', (req, res, next) => {
  // creamos un agente en memoria
  const agente = new Agente(req.body);

  // lo persistimos en la colección de agentes
  agente.save((err, agenteGuardado) => {
    if (err) {
      next(err);
      return;
    }

    res.json({ success: true, result: agenteGuardado });
  })
});

module.exports = router;
