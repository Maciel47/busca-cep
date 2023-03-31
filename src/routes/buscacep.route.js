const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const buscacep_controller = require('../controller/buscacep.controller');
// teste simples
router.get('/testar', buscacep_controller.test);

router.post('/create', buscacep_controller.create);

module.exports = router;