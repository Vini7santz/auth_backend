import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Endpoint para registro
app.post("/register", (req: Request, res: Response) => {
  console.log("Recebendo requisição de registro:", req.body);
  // Aqui você pode adicionar a lógica para registrar o usuário
  res.json({ message: "Usuário registrado com sucesso!" });
});

// Endpoint para login
app.post("/login", (req: Request, res: Response) => {
  console.log("Recebendo requisição de login:", req.body); // Log da requisição de login
  const { email, password } = req.body;

  if (email === "joao@example.com" && password === "senhaSegura") {
    res.json({ message: "Login bem-sucedido!" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas!" });
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
