module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    telefone: { type: DataTypes.STRING },
    endereco: { type: DataTypes.STRING },
    cpf: { type: DataTypes.STRING, unique: true }
  });

 Cliente.associate = models => {
  Cliente.hasMany(models.Venda, { foreignKey: 'clienteId' });
};


  return Cliente;
};
