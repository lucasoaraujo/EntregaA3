const { Produto } = require('../models');

module.exports = {
    listarTodos() {
        return Produto.findAll();
    },

    criar(dados) {
        return Produto.create(dados);
    },

    atualizar(id, dados) {
        return Produto.findByPk(id).then(produto => {
            if (!produto) return null;
            return produto.update(dados);
        });
    },

    deletar(id) {
        return Produto.findByPk(id).then(produto => {
            if (!produto) return null;
            return produto.destroy();
        });
    }
};
