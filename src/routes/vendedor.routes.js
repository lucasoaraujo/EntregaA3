// src/routes/vendedor.routes.js
const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/vendedor.controller');

router.get('/', vendedorController.listarVendedores);
router.post('/', vendedorController.criarVendedor);
router.put('/:id', vendedorController.atualizarVendedor);
router.delete('/:id', vendedorController.deletarVendedor);

module.exports = router;