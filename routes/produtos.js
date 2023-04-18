const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

// Retorna todos os produtos
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os produtos",
  });
});

// Insere um produto
router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query("INSERT INTO produtos (nome, preco) VALUES (?,?)");
    //São os dois pontos de interrogação
    [req.body.nome, req.body.preco];
    //calbeck da query
    (error, resultado, field) => {
      //quando ele entrar no calbeck ele tem que liberar esta conexão
      conn.release();
      if (error) {
        return res.status(500).send({
          error: error,
          response: null,
        });
      }
      //
      res.status(201).send({
        mensagem: "Prduto inserido com sucesso",
        id_produto: resultado.insertId,
      });
    };
  });
});

// Retorna os dados de um produto
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  if (id === "especial") {
    res.status(200).send({
      mensagem: "Usando o GET de um produto exclusivo",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "Você passou um ID",
    });
  }
});

// Altera um Produto
router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Produto alterado",
  });
});

// Deleta um produto
router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Produto excluido",
  });
});
module.exports = router;
