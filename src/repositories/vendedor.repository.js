const { Vendedor } = require('../models');

module.exports = {
  async listarTodos() {
    return await Vendedor.findAll();
  },

  async criar(dados) {
    return await Vendedor.create(dados);
  },

  async atualizar(id, dados) {
    const vendedor = await Vendedor.findByPk(id);
    if (!vendedor) return null;
    return await vendedor.update(dados);
  },

  async deletar(id) {
    const vendedor = await Vendedor.findByPk(id);
    if (!vendedor) return null;
    return await vendedor.destroy();
  }
};
