# Projeto Cadastro de Usuários Full Stack

## O que é este projeto?

Aplicação full stack para cadastro de usuários, com:

- Frontend em React
- Backend em Node.js usando Fastify
- Banco de dados PostgreSQL hospedado na Neon.tech
- API REST para comunicação entre frontend e backend

## Como rodar o projeto?

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/seurepositorio.git
cd seurepositorio

2. Backend
Entre na pasta do backend (se separado):


cd backend

Instale as dependências:


npm install

Crie o arquivo .env (baseado no .env.example):


cp .env.example .env

Edite o .env e coloque sua URL do banco PostgreSQL da Neon.tech.


Rode o script para criar a tabela:


node createTable.js

Inicie o servidor backend:


npm run dev

3. Frontend
Entre na pasta do frontend (se separado):


cd ../frontend

Instale as dependências:


npm install

Inicie o React:


npm start

Funcionalidades
Criar, listar, buscar, atualizar e deletar usuários


Busca por nome


Atualização completa (PUT) e parcial (PATCH)


Rotas da API
Método
Rota
Descrição
GET
/users
Lista todos usuários
GET
/users/:id
Busca usuário por ID
POST
/users
Cria um usuário
PUT
/users/:id
Atualiza dados completos
PATCH
/users/:id
Atualiza dados parciais
DELETE
/users/:id
Deleta usuário

Tecnologias usadas
React, Axios/Fetch


Node.js, Fastify


PostgreSQL Neon.tech


dotenv, ESLint, Prettier, CORS


Autor
Samira

---

## .env.example (Exemplo simples)

```env
# URL de conexão com o banco PostgreSQL na Neon.tech
DATABASE_URL=postgresql://usuario:senha@host:porta/nome_do_banco?sslmode=require

# Porta do servidor Fastify (opcional)
PORT=3002
