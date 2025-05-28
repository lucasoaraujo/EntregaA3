const fs = require('fs');
const path = require('path');
const { DataTypes, Sequelize: SequelizeClasse } = require('sequelize');

// Arquivo atual e conexão com o banco
const nomeArquivoAtual = path.basename(__filename);
const conexao = require('../../config/database');

const modelos = {};

// Lê e importa todos os modelos da pasta atual (exceto este arquivo)
fs.readdirSync(__dirname)
  .filter((arquivo) => {
    const naoEhOculto = !arquivo.startsWith('.');
    const naoEhEsteArquivo = arquivo !== nomeArquivoAtual;
    const ehJavaScript = arquivo.endsWith('.js');
    return naoEhOculto && naoEhEsteArquivo && ehJavaScript;
  })
  .forEach((arquivo) => {
    const caminhoCompleto = path.join(__dirname, arquivo);
    const definirModelo = require(caminhoCompleto);
    const modelo = definirModelo(conexao, DataTypes);
    modelos[modelo.name] = modelo;
  });

// Executa associações entre os modelos, se existirem
Object.keys(modelos).forEach((nomeModelo) => {
  const modelo = modelos[nomeModelo];
 if (typeof modelo.associate === 'function') {
  modelo.associate(modelos);
}
});

// Exporta os modelos, a conexão e a classe Sequelize
modelos.conexao = conexao;
modelos.SequelizeClasse = SequelizeClasse;

module.exports = modelos;
