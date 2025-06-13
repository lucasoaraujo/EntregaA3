const { Venda } = require('../models');

module.exports = {
  async listarTodos() {
    return await Venda.findAll();
  },

  async criar(dados) {
    return await Venda.create(dados);
  },

  async atualizar(id, dados) {
    const venda = await Venda.findByPk(id);
    if (!venda) return null;
    return await venda.update(dados);
  },

  async deletar(id) {
    const venda = await Venda.findByPk(id);
    if (!venda) return null;
    return await venda.destroy();
  }
};
