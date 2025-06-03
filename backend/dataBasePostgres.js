import {randomUUID } from "node:crypto"
import { sql } from "./sql.js"

// Define a classe DatabasePostgres que gerencia operações no banco de dados
export class DatabasePostgres{
    async list(search){  // Método para listar usuários, permitindo busca por nome
        let users


        if(search){
            users = await sql`select * from users where name ilike ${'%' + search + '%'}`
        } else{
            users = await sql`select * from users`
        }


        return users
    }

    async getById(id) {
        const result = await sql`SELECT * FROM users WHERE id = ${id}`
        return result[0]
    }


 // Método para criar um novo usuário no banco
    async create(user){
        const userId = randomUUID()
        const { name, email } = user


        await sql`insert into users(id, name, email) VALUES (${userId}, ${name}, ${email})`


    }

 // Método para atualizar completamente os dados de um usuário
    async update(id, user){
        const { name, email } = user


        await sql`update users set name = ${name}, email = ${email} where id = ${id}`
    }
   
 // Método para excluir um usuário do banco de dados
    async delete(id){
        await sql`delete from users where id = ${id}`
    }
    // Método para atualização parcial de dados do usuário (PATCH)
   async partialUpdate(id, data) {
    await sql`
        UPDATE users
        SET name = COALESCE(${data.name}, name),
            email = COALESCE(${data.email}, email)
        WHERE id = ${id}
    `;
}
}

/* verificar dps */
