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
      foreignKey: 'venda_id'
    });

    VendaProduto.belongsTo(models.Produto, {
      foreignKey: 'produto_id'
    });
  };

  return VendaProduto;
};
