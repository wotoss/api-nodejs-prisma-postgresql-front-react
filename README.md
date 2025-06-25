# 📌 API CRUD de Usuários - Node.js + Prisma + PostgreSQL

Este projeto é uma API REST simples para cadastro e gerenciamento de usuários, desenvolvida com **Node.js**, utilizando o **ORM Prisma** e o banco de dados **PostgreSQL**.

---

## 📚 Tecnologias utilizadas

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-blue?logo=postgresql&logoColor=white)


---
## Front-end que faz o consumo desta API
🖥️ Frontend React que consome esta API: [Frontend React CRUD](https://github.com/wotoss/Frontend-React-CRUD---usuarios)

---
## 📂 Funcionalidades da API

A API permite as seguintes operações básicas de CRUD:

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/usuarios` | Criar um novo usuário |
| GET | `/usuarios` | Listar todos os usuários ou filtrar por query string |
| PUT | `/usuarios/:id` | Atualizar um usuário existente |
| DELETE | `/usuarios/:id` | Deletar um usuário |

---

## 🖥️ Configuração do Servidor

O servidor está configurado para rodar localmente na porta **3000**.

```javascript
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

