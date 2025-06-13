const { VendaProduto } = require('../models');

module.exports = {
  async listarTodos() {
    return await VendaProduto.findAll();
  },

  async criar(dados) {
    return await VendaProduto.create(dados);
  },

  async atualizar(id, dados) {
    const vendaProduto = await VendaProduto.findByPk(id);
    if (!vendaProduto) return null;
    return await vendaProduto.update(dados);
  },

  async deletar(id) {
    const vendaProduto = await VendaProduto.findByPk(id);
    if (!vendaProduto) return null;
    return await vendaProduto.destroy();
  }
};
