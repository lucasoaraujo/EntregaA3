module.exports = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Venda.associate = models => {
    Venda.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    Venda.hasMany(models.VendaProduto, { foreignKey: 'venda_id' });
  };

  return Venda;
};
