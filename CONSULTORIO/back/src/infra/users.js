/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

//==== usuarios
const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "usuarios" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "email" text,
    "senha" text
  );`;

function createTableUsers() {
    db.run(USERS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuarios");
    });
}

db.serialize( ()=> {
    createTableUsers();
});