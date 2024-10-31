"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const userRepository_1 = require("../repositories/userRepository");
const hashHelper_1 = require("../helpers/hashHelper");
const sessionHelper_1 = require("../helpers/sessionHelper");
class AuthService {
    constructor() {
        this.userRepository = new userRepository_1.UserRepository();
    }
    async registerUser(name, email, password) {
        const passwordHash = (0, hashHelper_1.hashPassword)(password);
        const user = await this.userRepository.addUser(name, email, passwordHash);
        return user;
    }
    async loginUser(email, password) {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user)
            throw new Error("Usuário não encontrado");
        const isPasswordValid = (0, hashHelper_1.comparePassword)(password, user.passwordHash);
        if (!isPasswordValid)
            throw new Error("Senha incorreta");
        (0, sessionHelper_1.createSession)(user.id);
        return user;
    }
}
exports.AuthService = AuthService;
