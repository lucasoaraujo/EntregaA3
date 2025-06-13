const clienteRepository = require('../repositories/cliente.repository');

module.exports = {
    async listarClientes(req, res) {
        try {
            const clientes = await clienteRepository.listarTodos();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar clientes' });
        }
    },

    async criarCliente(req, res) {
        console.log('Criando cliente com dados:', req.body);
        try {
            const novoCliente = await clienteRepository.criar(req.body);
            res.status(201).json(novoCliente);
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            res.status(500).json({ error: 'Erro ao criar cliente' });
        }
    },

    async atualizarCliente(req, res) {
        try {
            const atualizado = await clienteRepository.atualizar(req.params.id, req.body);
            if (!atualizado) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }
            res.json(atualizado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar cliente' });
        }
    },

    async deletarCliente(req, res) {
        try {
            const deletado = await clienteRepository.deletar(req.params.id);
            if (!deletado) {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar cliente' });
        }
    }
};
