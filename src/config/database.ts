import { Pool } from 'pg';

const pool = new Pool({
  user: 'seu_usuario', // Altere para seu usuário do banco
  host: 'localhost',    // Altere se necessário
  database: 'seu_banco_de_dados', // Altere para o nome do seu banco
  password: 'sua_senha', // Altere para sua senha
  port: 5432,           // Altere se necessário
});

export default pool;