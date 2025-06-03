const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/venda.controller');

router.get('/', vendaController.listarVenda);
router.post('/', vendaController.criarVenda);
router.put('/:id', vendaController.atualizarVenda);
router.delete('/:id', vendaController.deletarVenda);

module.exports = router;