const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos.js');
const rotaPedidos = require('./routes/pedidos.js');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

module.exports = app;
