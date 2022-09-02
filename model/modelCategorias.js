//IMPORTAÇÃO DO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//IMPORATAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
const connection = require('../database/database');

/*
PARAMETROS DO MÉTODO DEFINE
1- NOME DA TABELA - STRING
2 - OBJETO JSON:
            NOME DO CAMPO DA TABELA
            TIPO DE DADOSDO CAMPO DA TABELA
            REGRAS DO CAMPO DA TABELA (NULL, NOT NULL)
*/
const modelCategoria = connection.define(
    'tbl_categoria',
    {
        code_categoria:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_categoria:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
    }
);

modelCategoria.sync({force:true});

module.exports = modelCategoria;