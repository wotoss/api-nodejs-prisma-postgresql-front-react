const cors = require('cors');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
/*eu deixando o cors assim estou permitindo qualquer
  pagina acessar o meu ambiente. - isto não é seguro*/
app.use(cors())


//vamos criar um usuário
//iremos receber informação do (font-end ou postman).
app.post('/usuarios', async (request, response) => {
//estou enviando esta requisição para base de dados postgress
  await prisma.user.create({
    data: {
      email: request.body.email,
      name: request.body.name,
      idade: request.body.idade
    }
  })
  response.status(201).json(request.body)
})

//quando eu acessar meu servidor no get /usuario e acesso esta rota
//request "vai chegar uma requisição"
//response - "eu preciso devolver uma resposta"
app.get('/usuarios', async (request, response) => {
  console.log(request)

  let listaUsuarios = []

  if (request.query) {
    listaUsuarios = await prisma.user.findMany({
      where: {
        name: request.query.name,
        email: request.query.email,
        idade: request.query.idade
      }
    })
  } else {
    listaUsuarios = await prisma.user.findMany({
      orderBy: {
        id: 'asc'
      }
    });
  }


  response.status(200).json(listaUsuarios)
});

//update
app.put('/usuarios/:id', async (request, response) => {
  //const { id } = request.params
  const updateUser = await prisma.user.update({
    where: {
      id: Number(request.params.id)
    },

    data: {
      email: request.body.email,
      name: request.body.name,
      idade: request.body.idade
    }
  })
  response.status(200).json(request.body)
})

//montar o delete 
app.delete('/usuarios/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: Number(req.params.id)
    }
  })
  res.status(200).json({ message: "Usuário deletado com sucesso ! " })
})

//preciso avisar ao meu servidor onde ele vai (startar/rodar)
//como eu estou no meu computador eu preciso avisar isto em qual porta ele vai usar 
app.listen(3000)

/*  
   Criar nossa API de Usuários
   
   1º Criar um usuário
   2º Listar todos os usuários
   3º Editar um usuário
   4º Deletar um usuário   
*/

