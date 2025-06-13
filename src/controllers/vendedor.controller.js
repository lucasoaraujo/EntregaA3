const vendedorRepository = require('../repositories/vendedor.repository');

module.exports = {
  async listarVendedores(req, res) {
    try {
      const vendedores = await vendedorRepository.listarTodos();
      res.json(vendedores);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao listar vendedores.' });
    }
  },

  async criarVendedor(req, res) {
    try {
      const novoVendedor = await vendedorRepository.criar(req.body);
      res.status(201).json(novoVendedor);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao criar vendedor.' });
    }
  },

  async atualizarVendedor(req, res) {
    try {
      const { id } = req.params;
      const vendedorAtualizado = await vendedorRepository.atualizar(id, req.body);

      if (!vendedorAtualizado) {
        return res.status(404).json({ erro: 'Vendedor não encontrado.' });
      }

      res.json(vendedorAtualizado);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao atualizar vendedor.' });
    }
  },

  async deletarVendedor(req, res) {
    try {
      const { id } = req.params;
      const resultado = await vendedorRepository.deletar(id);

      if (!resultado) {
        return res.status(404).json({ erro: 'Vendedor não encontrado.' });
      }

      res.status(204).send(); // sem conteúdo
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao deletar vendedor.' });
    }
  }
};
