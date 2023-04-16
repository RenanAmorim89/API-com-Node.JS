const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaProdutos = require("./routes/produtos.js");
const rotaPedidos = require("./routes/pedidos.js");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); // apenas dasdos simples
app.use(bodyParser.json); //json de entrada

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-requested0-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});

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
