import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/register", (req: Request, res: Response) => {
  console.log("Recebendo requisição de registro:", req.body);

  res.json({ message: "Usuário registrado com sucesso!" });
});

app.post("/login", (req: Request, res: Response) => {
  console.log("Recebendo requisição de login:", req.body);
  const { email, password } = req.body;

  if (email === "joao@example.com" && password === "senhaSegura") {
    res.json({ message: "Login bem-sucedido!" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas!" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}`);
});
