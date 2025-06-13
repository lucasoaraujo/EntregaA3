const { Cliente } = require('../models');

module.exports = {
    listarTodos() {
        return Cliente.findAll();
    },

    criar(dados) {
        return Cliente.create(dados);
    },

    atualizar(id, dados) {
        return Cliente.findByPk(id).then(cliente => {
            if (!cliente) return null;
            return cliente.update(dados);
        });
    },

    deletar(id) {
        return Cliente.findByPk(id).then(cliente => {
            if (!cliente) return null;
            return cliente.destroy();
        });
    }
};
