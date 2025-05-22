const express = require('express');
const app = express();
const port = 3000;
const bancoDeDados = require("./src/models/index.js");

bancoDeDados.conexao.sync({ alter: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Iniciando projeto na porta ${port}`);
        });
    })
    .catch(error => {
        console.log("Problema no banco de dados", error);
    });

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});
