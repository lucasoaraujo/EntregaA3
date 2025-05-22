const sequelize = require('./config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco!');
  } catch (error) {
    console.error('Erro ao conectar');
  } finally {
    await sequelize.close();
  }
})();