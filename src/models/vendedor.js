module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define('Vendedor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    data_admissao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'ativo'
    }
  });

  Vendedor.associate = (models) => {
    Vendedor.hasMany(models.Venda, {
      foreignKey: 'vendedorId'
    });
  };

  return Vendedor;
};
