const produtoRepository = require('../repositories/produto.repository');

module.exports = {
    async listarProdutos(req, res) {
        try {
            const produtos = await produtoRepository.listarTodos();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar produtos' });
        }
    },

    async criarProduto(req, res) {
        try {
            const novoProduto = await produtoRepository.criar(req.body);
            res.status(201).json(novoProduto);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            res.status(500).json({ error: 'Erro ao criar produto' });
        }
    },

    async atualizarProduto(req, res) {
        try {
            const atualizado = await produtoRepository.atualizar(req.params.id, req.body);
            if (!atualizado) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json(atualizado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    },

    async deletarProduto(req, res) {
        try {
            const deletado = await produtoRepository.deletar(req.params.id);
            if (!deletado) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
};
