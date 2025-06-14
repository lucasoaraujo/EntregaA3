'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      valorTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('concluída', 'cancelada', 'pendente'),
        defaultValue: 'concluída'
      },
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      vendedorId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Adicionando foreign key para clienteId
    await queryInterface.addConstraint('vendas', {
      fields: ['clienteId'],
      type: 'foreign key',
      name: 'fk_vendas_clienteId', // Nome único para a constraint
      references: {
        table: 'Clientes',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    // Adicionando foreign key para vendedorId
    await queryInterface.addConstraint('vendas', {
      fields: ['vendedorId'],
      type: 'foreign key',
      name: 'fk_vendas_vendedorId', // Nome único para a constraint
      references: {
        table: 'vendedores',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vendas');
  }
};
