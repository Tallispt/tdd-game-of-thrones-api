"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var charactersRouter_1 = __importDefault(require("./routers/charactersRouter"));
var continentsRouter_1 = __importDefault(require("./routers/continentsRouter"));
var server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use(charactersRouter_1.default);
server.use(continentsRouter_1.default);
server.listen(4000, function () { return console.log("Listening to port 4000"); });
exports.default = server;
