"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserLoggedIn = exports.destroySession = exports.createSession = void 0;
const sessions = {};
const createSession = (userId) => {
    sessions[userId] = true;
};
exports.createSession = createSession;
const destroySession = (userId) => {
    delete sessions[userId];
};
exports.destroySession = destroySession;
const isUserLoggedIn = (userId) => {
    return !!sessions[userId];
};
exports.isUserLoggedIn = isUserLoggedIn;
