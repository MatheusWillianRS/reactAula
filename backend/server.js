import fastify from "fastify"
import { DatabasePostgres } from "./dataBasePostgres.js"
import cors from "@fastify/cors"


const server = fastify();


//const database = new DatabaseMemory()


await server.register(cors, {
    origin: '*',
    methods:['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
})


const database = new DatabasePostgres();


//request pega informções do user
server.post('/users', async (request, reply) => {
    const { name, email} = request.body


    await database.create({
        name,
        email,
    })


    return reply.status(201).send()
})

//Listar todos os usuários, opcionalmente filtrando por nome
server.get('/users', async (request) => {
    const search = request.query.search


    const users = await database.list(search)


    return users
})

//Atualizar completamente um usuário
server.put('/users/:id', async (request, reply) => {
    const userId = request.params.id
    const { name, email} = request.body


    await database.update(userId, {
        name,
        email,
    })




    return reply.status(204).send() //resposta teve sucesso mas não retorna um conteúdo
})


//  Atualizar parcialmente um usuário (atualiza apenas os campos fornecidos)
server.patch('/users/:id', async (request, reply) => {
    const userId = request.params.id;
    const { name, email } = request.body;

    try {
        await database.partialUpdate(userId, {
            name,
            email,
        });

        return reply.status(204).send(); // Resposta bem-sucedida sem conteúdo
    } catch (error) {
        console.error(error);
        return reply.status(500).send({ error: "Erro ao atualizar usuário" });
    }
});

// Remover um usuário
server.delete('/users/:id', async (request, reply) => {
    const userId = request.params.id


   await database.delete(userId)


    return reply.status(204).send()
})

// Inicia o servidor na porta definida em .env ou padrão (3002)
server.listen({
    port: process.env.PORT ?? 3002,
})