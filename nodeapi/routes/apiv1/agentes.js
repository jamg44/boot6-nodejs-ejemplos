'use strict';

const express = require('express');
const router = express.Router();

// cargar el modelo de Agente
const Agente = require('../../models/Agente');

/**
 * GET /agentes
 * Obtener una lista de agentes
 */
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    const rows = await Agente.find(filter).exec();
    res.json({ success: true, result: rows });
  } catch(err) {
    next(err);
  }
});

/**
 * GET /agentes:id
 * Obtener un agente
 */
router.get('/:id', async (req, res, next) => {
  try {
  const _id = req.params.id;
  const agente = await Agente.findOne({ _id: _id }).exec();
  res.json({ success: true, result: agente });
  } catch(err) {
    next(err);
  }
});

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

/**
 * PUT /agentes
 * Actualiza un agente
 */
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = req.body;
    const agenteActualizado = await Agente.findOneAndUpdate({ _id: _id}, data, { new: true }).exec();
    res.json({ success: true, result: agenteActualizado });
  } catch(err) {
    next(err);
  }
});

/**
 * DELETE /agentes
 * Elimina un agente
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    await Agente.remove({ _id: _id }).exec();
    res.json({ success: true });
  } catch(err) {
    next(err);
  }
});

module.exports = router;
