"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const authService_1 = require("../services/authService");
const authService = new authService_1.AuthService();
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await authService.registerUser(name, email, password);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.loginUser(email, password);
        res.status(200).json({ message: "Login bem-sucedido", user });
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
};
exports.login = login;
