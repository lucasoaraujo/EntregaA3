module.exports = (sequelize, DataTypes) => {
  const VendaProduto = sequelize.define('VendaProduto', {
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    preco_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  VendaProduto.associate = (models) => {
    VendaProduto.belongsTo(models.Venda, {
      foreignKey: 'vendaId'
    });

    VendaProduto.belongsTo(models.Produto, {
      foreignKey: 'produtoId'
    });
  };

  return VendaProduto;
};
