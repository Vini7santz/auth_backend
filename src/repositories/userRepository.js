"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
class UserRepository {
    constructor() {
        this.pool = database_1.default;
    }
    async getUserByEmail(email) {
        const { rows } = await this.pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return rows[0] || null;
    }
    async addUser(name, email, passwordHash) {
        const queryText = "INSERT INTO users(name, email, passwordHash) VALUES($1, $2, $3) RETURNING *";
        const { rows } = await this.pool.query(queryText, [
            name,
            email,
            passwordHash,
        ]);
        return rows[0];
    }
}
exports.UserRepository = UserRepository;
