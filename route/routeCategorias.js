/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const { response } = require('express');
const express = require('express');

const modelCategoria = require('../model/modelCategorias');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/

//ROTA DE CADASTRO DE CATEGORIAS
//NOME (P1, P2, P3, P4){}
router.post('/cadastrarCategoria', (req, res)=>{

  console.log(req.body);

  let {nome_categoria} = req.body;

  modelCategoria.create(

    {nome_categoria}

  ).then(
    ()=>{
      return res.status(201).json({
        erroStatus:false,
        mensagemStatus:"CATEGORIA INSERIDA COM SUCESSO."
      })
    }
  ).catch(
    (error)=>{
      return res.status(400).json({
        errorStatus:true,
        mensagemStatus:"ERRO AO CADASTRAR A CATEGORIA.",
        errorObject:error
      });
    }
  );
});

//ROTA DE LISTAGEM DE CATEGORIA SEM CRITÉRIO
router.get('/listarCategoria', (req, res)=>{
  
  modelCategoria.findAll()
    .then(
      (response)=>{

        return res.status(200).json({
          erroStatus:false,
          mensagemStatus:"CATEGORIAS LISTADAS COM SUCESSO.",
          data:response
        })
      }
    ).catch(
      (error)=>{
        return res.status(400).json({
          erroStatus:true,
          mensagemStatus:"ERRO AO LISTAR AS CATEGORIAS.",
          errorObject:error
        });
      }
    )
});

//ROTA DE LISTAGEM DE CATEGORIA POR COD_CATEGORIA
router.get('/listarCategoriaPK/:cod_categoria', (req, res)=>{

  let {cod_categoria} = req.params;

  modelCategoria.findByPk(cod_categoria)
  .then(
    (response)=>{
      return res.status(200).json({
        erroStatus:false,
        mensagemStatus:"CATEGORIA RECUPERADA COM SUCESSO.",
        data:response
      })
    }
  ).catch(
    (error)=>{
      return res.status(400).json({
        erroStatus:true,
        mensagemStatus:"ERRO AO RECUPERAR A CATEGORIA.",
        errorObject:error
      });
    }
  )

});

//ROTA DE LISTAGEM DE CATEGORIA POR NOME_CATEGORIA
router.get('/listarCategoriaNOME/:nome_categoria', (req, res)=>{
  
  let {nome_categoria} = req.params;

  modelCategoria.findOne({
    attributes:['cod_categoria', 'nome_categoria'],
    where:{nome_categoria}

  }).then(

    (response)=>{
      return res.status(200).json({

        erroStatus:false,
        mensagemStatus:"CATEGORIA RECUPERADA COM SUCESSO.",
        data:response
      })
    }
  ).catch(
    (error)=>{
      return res.status(400).json({
        erroStatus:true,
        mensagemStatus:"ERRO AO RECUPERAR A CATEGORIA.",
        data:response
      })
    }
  )
})

//ROTA DE ALTERAÇÃO DE CATEGORIAS
router.put('/alterarCategoria', (req, res)=>{
  const {cod_categoria, nome_categoria} = req.body;

  modelCategoria.update(

    {nome_categoria},
    {where:{cod_categoria}}

  ).then(

    ()=>{
      return res.status(200).json({
        erroStatus:false,
        mensagemStatus:"CATEGORIA ALTERADA COM SUCESSO."
      })
    });
  });

//ROTA DE EXCLUSÃO DE CATEGORIAS
router.delete('/excluirCategoria/:cod_categoria', (req, res)=>{
    console.log(req.params);
    let {cod_categoria} = req.params

    modelCategoria.destroy(

      {where:{cod_categoria}}

    ).then(

      ()=>{
        return res.status(200).json({

          erroStatus:false,
          mensagemStatus:"CATEGORIA EXCLUIDA COM SUCESSO."

        })
      }
    ).catch(
      (error)=>{
        return res.status(400).json({

          erroStatus:true,
          mensagemStatus:"ERRO AO EXCLUIR A CATEGORIA.",
          errorObject:error

        })
      }
    );
  });

module.exports = router;