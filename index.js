/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

/*TORNA O EXPRESS EXECUTAVEL DENTRO DO SCRIPT index.js ATRAVÉS DA CONSTANTE app */
const app = express();

/*
app.get('/', function (req, res) {
  res.send('FUNCIONA')
})

app.get('/teste', function (req, res) {
  res.send('ACHO QUE FUNCIONOU')
})
*/

/*CRIA UM WEBSERVWR CAPAZ DERECEBER REQUISOÇÕES VIA
HTTP 
PARAMETROS DO listen
1 - PORTA LÓGICA (OBRIGATÓRIA)
2 - CALLBACK (OPCIONAL)
*/

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO!');   
});