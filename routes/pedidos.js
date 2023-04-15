const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os produtos',
  });
});

// Insere um produto
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Insere um produto',
  });
});

// Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  if (id === 'especial') {
    res.status(200).send({
      mensagem: 'Usando o GET de um produto exclusivo',
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: 'Você passou um ID',
    });
  }
});

// Altera um Produto
router.patch('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Produto alterado',
  });
});

// Deleta um produto
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Produto excluido',
  });
});
module.exports = router;
