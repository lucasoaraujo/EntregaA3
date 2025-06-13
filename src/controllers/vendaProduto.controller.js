const vendaProdutoRepository = require('../repositories/vendaProduto.repository');

module.exports = {
  async listarVendaProduto(req, res) {
    try {
      const vendaProduto = await vendaProdutoRepository.listarTodos();
      res.json(vendaProduto);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao listar venda de produto.' });
    }
  },

  async criarVendaProduto(req, res) {
    try {
      const novaVendaProduto = await vendaProdutoRepository.criar(req.body);
      res.status(201).json(novaVendaProduto);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao criar venda de produto.' });
    }
  },

  async atualizarVendaProduto(req, res) {
    try {
      const { id } = req.params;
      const vendaProdutoAtualizado = await vendaProdutoRepository.atualizar(id, req.body);

      if (!vendaProdutoAtualizado) {
        return res.status(404).json({ erro: 'Venda de produto não encontrada.' });
      }

      res.json(vendaProdutoAtualizado);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao atualizar venda de produto.' });
    }
  },

  async deletarVendaProduto(req, res) {
    try {
      const { id } = req.params;
      const resultado = await vendaProdutoRepository.deletar(id);

      if (!resultado) {
        return res.status(404).json({ erro: 'Venda de produto não encontrada.' });
      }

      res.status(204).send(); // sem conteúdo
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao deletar venda de Produto.' });
    }
  }
};
