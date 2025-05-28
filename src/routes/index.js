const express = require('express');
const clienteRoutes = require('./cliente.routes');
const produtoRoutes = require('./produto.routes');
const vendedorRoutes = require('./vendedor.routes');

const router = express.Router();

router.use('/clientes', clienteRoutes);
router.use('/produtos', produtoRoutes);
router.use('/vendedores', vendedorRoutes);

module.exports = router;
