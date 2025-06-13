// const vendaRepository = require('../repositories/venda.repository');

// module.exports = {
//   // Método para listar todas as vendas
//   async listarVenda(req, res) {
//     try {
//       // Busca todas as vendas no repositório
//       const venda = await vendaRepository.listarTodos();
//       // Retorna as vendas em JSON
//       res.json(venda);
//     } catch (erro) {
//       // Em caso de erro, retorna status 500 e mensagem de erro
//       res.status(500).json({ erro: 'Erro ao listar vendas.' });
//     }
//   },

//   // Método para criar uma nova venda
//   async criarVenda(req, res) {
//     try {
//       // Cria uma nova venda usando os dados do corpo da requisição
//       const novaVenda = await vendaRepository.criar(req.body);
//       // Retorna status 201 e a venda criada em JSON
//       res.status(201).json(novaVenda);
//     } catch (erro) {
//       // Em caso de erro, retorna status 500 e mensagem de erro
//       res.status(500).json({ erro: 'Erro ao criar venda.' });
//     }
//   },

//   // Método para atualizar uma venda existente
//   async atualizarVenda(req, res) {
//     try {
//       // Pega o id da venda a atualizar da URL
//       const { id } = req.params;
//       // Atualiza a venda com os dados do corpo da requisição
//       const vendaAtualizado = await vendaRepository


const vendaRepository = require('../repositories/venda.repository');

module.exports = {
  async listarVenda(req, res) {
    try {
      const vendas = await vendaRepository.listarTodos();
      res.json(vendas);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao listar vendas.' });
    }
  },

  async criarVenda(req, res) {
    try {
      // Cria venda com status padrão do model ('concluída' ou outro enviado no body)
      const novaVenda = await vendaRepository.criar(req.body);
      res.status(201).json(novaVenda);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao criar venda.' });
    }
  },

  async atualizarVenda(req, res) {
    try {
      const { id } = req.params;
      const vendaAtualizada = await vendaRepository.atualizar(id, req.body);

      if (!vendaAtualizada) {
        return res.status(404).json({ erro: 'Venda não encontrada.' });
      }

      res.json(vendaAtualizada);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao atualizar venda.' });
    }
  },

  async deletarVenda(req, res) {
    try {
      const { id } = req.params;
      const resultado = await vendaRepository.deletar(id);

      if (!resultado) {
        return res.status(404).json({ erro: 'Venda não encontrada.' });
      }

      res.status(204).send();
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao deletar venda.' });
    }
  },

  async cancelarVenda(req, res) {
    try {
      const { id } = req.params;

      // Atualiza status da venda para 'cancelada'
      const vendaCancelada = await vendaRepository.atualizar(id, { status: 'cancelada' });

      if (!vendaCancelada) {
        return res.status(404).json({ erro: 'Venda não encontrada.' });
      }

      res.json({ message: 'Venda cancelada com sucesso', venda: vendaCancelada });
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao cancelar venda.' });
    }
  },
};
