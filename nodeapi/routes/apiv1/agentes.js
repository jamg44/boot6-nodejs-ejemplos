'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('../../lib/basicAuth');
const jwtAuth = require('../../lib/jwtAuth');

// cargar el modelo de Agente
const Agente = require('../../models/Agente');

// si quiero que afecte a todo el router
//router.use(basicAuth(
//  process.env.BASIC_AUTH_USER, 
//  process.env.BASIC_AUTH_PASSWORD));

router.use(jwtAuth());

/**
 * GET /agentes
 * Obtener una lista de agentes
 */
router.get('/', async (req, res, next) => {
  try {
    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit); // Number(str)
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;
    const fields = req.query.fields;

    // creo el filtro vacio
    const filter = {};

    if (name) {
      filter.name = name;
    }

    if (age) {
      filter.age = age;
    }

    const rows = await Agente.list(filter, limit, skip, sort, fields);
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
