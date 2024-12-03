import express from "express";
import bcrypt from "bcryptjs";
import pool from "./config/database";

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Email e senha são obrigatórios" });
    }

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email],
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        res.status(200).json({
            message: "Login bem-sucedido",
            user: { id: user.id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error("Erro ao tentar fazer login:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
