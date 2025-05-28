module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  quantidadeEstoque: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataCadastro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

Produto.associate = models => {
    Produto.hasMany(models.VendaProduto, { foreignKey: 'produtoId' });
  };



return Produto;
};