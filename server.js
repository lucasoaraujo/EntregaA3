const express = require('express');
const app = express();
const port = 3000;
const bancoDeDados = require("./src/models/index.js");
const rotas = require('./src/routes/index.js');

app.use(express.json());
app.use(rotas);

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

bancoDeDados.conexao.sync({ alter: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Iniciando projeto na porta ${port}`);
        });
    })
    .catch(error => {
        console.log("Problema no banco de dados", error);
    });
