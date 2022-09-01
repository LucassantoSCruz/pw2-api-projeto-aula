/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/

//ROTA DE CADASTRO DE CATEGORIAS
//NOME (P1, P2, P3, P4){}
router.post('/cadastrarCategoria', (req, res)=>{
  res.send('ROTA DE CADASTRO DE CATEGORIA');
});

//ROTA DE LEITURA DE CATEGORIAS
router.get('/listarCategoria', (req, res)=>{
  res.send('ROTA DE LISTAGEM DE CATEGORIA');
});

//ROTA DE ALTERAÇÃO DE CATEGORIAS
router.put('/alterarCategoria', (req, res)=>{
  res.send('ROTA DE ALTERAÇÃO DE CATEGORIA');
});

//ROTA DE EXCLUSÃO DE CATEGORIAS
router.delete('/excluirCategoria', (req, res)=>{
  res.send('ROTA DE EXCLUSÃO DE CATEGORIA');
});

modules.exports = router;