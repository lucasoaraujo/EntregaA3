const router = require('express').Router();
const relatorioController = require('../controllersRelatorios/relatorio.controllers');

// Geração de relatório de produtos mais vendidos
router.get('/1', relatorioController.produtosMaisVendidos);

// Geração de relatório de produto por cliente
router.get('/2', relatorioController.produtosPorCliente);

// Geração de relatório de consumo médio do cliente
router.get('/3', relatorioController.consumoMedioCliente);

// Geração de relatório de produto com baixo estoque
router.get('/4', relatorioController.produtosBaixoEstoque);

module.exports = router ;
