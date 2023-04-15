const express = require("express");
const app = express();
const morgan = require("morgan");

const rotaProdutos = require("./routes/produtos.js");
const rotaPedidos = require("./routes/pedidos.js");

app.use(morgan("deve"));

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

//Quando não encontra rota
app.use((req, res, next) => {
  const erro = new Error("Não econtrado");
  erro.status = 404;
  next(erro);
});

app.use((req, res, next) => {
  res.status(erro.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});
module.exports = app;
