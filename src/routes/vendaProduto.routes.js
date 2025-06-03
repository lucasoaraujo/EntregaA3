// src/routes/produto.routes.js
const express = require('express');
const router = express.Router();
const vendaProdutoController = require('../controllers/vendaProduto.controller');

router.get('/', vendaProdutoController.listarVendaProduto);
router.post('/', vendaProdutoController.criarVendaProduto);
router.put('/:id', vendaProdutoController.atualizarVendaProduto);
router.delete('/:id', vendaProdutoController.deletarVendaProduto);

module.exports = router;