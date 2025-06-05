import {randomUUID } from "node:crypto"
import { sql } from "./sql.js"

// Define a classe DatabasePostgres que gerencia operações no banco de dados
export class DatabasePostgres{
    async list(){  // Método para listar usuários, permitindo busca por nome
        try{
            const result = await sql`SELECT * FROM users;`;
            return result;
        } catch(err){
            console.log("Erro ao listar usuários: ", err);
            return [];
        }
    }

 // Método para criar um novo usuário no banco
    async create(user){
        const userId = randomUUID()
        const { name, email } = user


        await sql`
            INSERT INTO users(id, name, email) VALUES (${userId}, ${name}, ${email})
        `;

    }

 // Método para atualizar completamente os dados de um usuário
    async update(id, user){
        const { name, email } = user;
        await sql`
        UPDATE users
        SET name = ${name}, email = ${email}
        WHERE id = ${id}
        `;
    }
   
 // Método para excluir um usuário do banco de dados
    async delete(id){
        await sql`DELETE FROM users WHERE id = ${id}`;
    }
}

