//IMPORTAÇÃO DO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

/***** CRIA A CONEXÃO COM O BANCO DE DADOS *****/

/*
PARAMETROS DO SEQUELIZE
1 - NOME DO BANCO - STRING
2 - USUARIO DO BANCO - STRING
3 - SENHA DO BANCO - STRING
4 - JSON:
    4.1 - O LOCAL ONDE O BANCO ESTÁ EXECUTANDO (host)   
    4.2 - TIPO DO BANCO (dialect)
*/

const connection = new Sequelize(
    'bd_libri_api',
    'root',
    '',
    {
    host:'localhost',
    dialect:'mysql',
    timezone: '-03:00'
    }
    );

module.exports = connection;