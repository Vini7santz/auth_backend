"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const hashPassword = (password) => {
    return crypto_1.default.createHash("sha256").update(password).digest("hex");
};
exports.hashPassword = hashPassword;
const comparePassword = (password, hash) => {
    return (0, exports.hashPassword)(password) === hash;
};
exports.comparePassword = comparePassword;
