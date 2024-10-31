"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'seu_usuario', // Altere para seu usuário do banco
    host: 'localhost', // Altere se necessário
    database: 'seu_banco_de_dados', // Altere para o nome do seu banco
    password: 'sua_senha', // Altere para sua senha
    port: 5432, // Altere se necessário
});
exports.default = pool;
