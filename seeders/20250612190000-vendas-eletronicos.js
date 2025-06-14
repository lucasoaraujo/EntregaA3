'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const vendas = [];

    const vendaProdutos = [];

    const now = new Date();

    for (let i = 1; i <= 10; i++) {
      const valorTotal = parseFloat((Math.random() * 5000 + 500).toFixed(2)); // valor aleatório entre 500 e 5500
      const vendaId = i;

      vendas.push({
        data: now,
        valorTotal,
        status: 'concluída',
        clienteId: i,
        vendedorId: i,
        createdAt: now,
        updatedAt: now
      });

      // Cada venda com 2 a 3 produtos
      const quantidadeItens = Math.floor(Math.random() * 2) + 2;
      for (let j = 0; j < quantidadeItens; j++) {
        const produtoId = ((i + j) % 10) + 1; // garante que produtoId fique entre 1 e 10
        const quantidade = Math.floor(Math.random() * 3) + 1;
        const preco_unitario = parseFloat((Math.random() * 1000 + 100).toFixed(2)); // entre 100 e 1100

        vendaProdutos.push({
          vendaId,
          produtoId,
          quantidade,
          preco_unitario,
          createdAt: now,
          updatedAt: now
        });
      }
    }

    await queryInterface.bulkInsert('vendas', vendas, {});

    await queryInterface.bulkInsert('vendaProdutos', vendaProdutos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendaProdutos', null, {});
    await queryInterface.bulkDelete('vendas', null, {});
  }
};
