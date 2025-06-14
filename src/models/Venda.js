module.exports = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    valorTotal: { 
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false 
    },
    status: {
      type: DataTypes.ENUM('concluída', 'cancelada', 'pendente'),
      defaultValue: 'concluída'
    }
  });

  Venda.associate = models => {
    Venda.belongsTo(models.Cliente, {
      foreignKey: 'clienteId',
      as: 'cliente'
    });

    Venda.belongsTo(models.Vendedor, {
      foreignKey: 'vendedorId',
      as: 'vendedor'
    });

    Venda.hasMany(models.VendaProduto, {
      foreignKey: 'vendaId',
      as: 'itens'
    });
  };

  return Venda;
};
