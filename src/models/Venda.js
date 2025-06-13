module.exports = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    valorTotal: { 
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false },
    status: {
      type: DataTypes.ENUM('concluída', 'cancelada', 'pendente'),
      defaultValue: 'concluída'
    }
  });

  Venda.associate = models => {
    Venda.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    Venda.belongsTo(models.Vendedor, { foreignKey: 'vendedorId' });
    Venda.hasMany(models.VendaProduto, { foreignKey: 'vendaId' });
  };

  return Venda;
};

