const express = require('express');
const clienteRoutes = require('./cliente.routes');
const produtoRoutes = require('./produto.routes');
const vendedorRoutes = require('./vendedor.routes');
const vendaRoutes = require('./venda.routes');
const vendaProdutoRoutes = require('./vendaProduto.routes')
const relatorioRoutes = require('./relatorio.routes')

const router = express.Router();

router.use('/clientes', clienteRoutes);
router.use('/produtos', produtoRoutes);
router.use('/vendedores', vendedorRoutes);
router.use('/venda', vendaRoutes);
router.use('/vendaProduto', vendaProdutoRoutes);
router.use('/relatorio', relatorioRoutes);

module.exports = router;
