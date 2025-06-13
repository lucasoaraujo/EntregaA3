'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const produtos = [
      {
        nome: "Smartphone Galaxy S21",
        descricao: "Smartphone Samsung com tela de 6.2 polegadas",
        preco: 3200.00,
        quantidadeEstoque: 15,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Notebook Inspiron 15",
        descricao: "Notebook Dell Inspiron com processador i5",
        preco: 4500.00,
        quantidadeEstoque: 8,
        categoria: "Informática",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Smart TV 55\" 4K",
        descricao: "Smart TV LG com resolução 4K UHD",
        preco: 2900.00,
        quantidadeEstoque: 10,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Fone de Ouvido Wireless",
        descricao: "Fone Sony com cancelamento de ruído",
        preco: 1200.00,
        quantidadeEstoque: 20,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Caixa de Som Bluetooth",
        descricao: "Caixa JBL portátil com bluetooth",
        preco: 550.00,
        quantidadeEstoque: 25,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Tablet Galaxy Tab S7",
        descricao: "Tablet Samsung com tela de 11 polegadas",
        preco: 3200.00,
        quantidadeEstoque: 12,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Console PlayStation 5",
        descricao: "Console Sony PlayStation 5 edição padrão",
        preco: 4800.00,
        quantidadeEstoque: 5,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Smartwatch Apple Watch",
        descricao: "Smartwatch Apple Watch Series 7",
        preco: 3900.00,
        quantidadeEstoque: 7,
        categoria: "Eletrônicos",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Câmera Digital Canon",
        descricao: "Câmera Canon EOS M50 Mark II",
        preco: 3500.00,
        quantidadeEstoque: 6,
        categoria: "Fotografia",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      },
      {
        nome: "Roteador Wi-Fi 6",
        descricao: "Roteador TP-Link Archer AX50 Wi-Fi 6",
        preco: 650.00,
        quantidadeEstoque: 18,
        categoria: "Informática",
        dataCadastro: now,
        createdAt: now,
        updatedAt: now
      }
    ];

    return queryInterface.bulkInsert('Produtos', produtos, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Produtos', null, {});
  }
};
