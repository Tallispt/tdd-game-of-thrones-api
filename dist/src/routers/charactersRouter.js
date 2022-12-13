"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var charactersRouter = (0, express_1.Router)();
charactersRouter.get("/characters", function (_req, res) {
    res.sendStatus(401);
});
charactersRouter.get("/characters/:characterId", function () { });
charactersRouter.post("/characters", function () { });
exports.default = charactersRouter;
