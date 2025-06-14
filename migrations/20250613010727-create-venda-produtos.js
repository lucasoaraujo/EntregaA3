'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendaProdutos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preco_unitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      vendaId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      produtoId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });

    // FK vendaId → vendas
    await queryInterface.addConstraint('vendaProdutos', {
      fields: ['vendaId'],
      type: 'foreign key',
      name: 'fk_vendaProdutos_vendaId',
      references: {
        table: 'vendas',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK produtoId → produtos
    await queryInterface.addConstraint('vendaProdutos', {
      fields: ['produtoId'],
      type: 'foreign key',
      name: 'fk_vendaProdutos_produtoId',
      references: {
        table: 'produtos',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vendaProdutos');
  }
};
