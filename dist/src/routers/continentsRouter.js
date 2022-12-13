"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var continentsRouter = (0, express_1.Router)();
continentsRouter.get("/continents", function () { });
continentsRouter.get("/continents/:continentId", function () { });
continentsRouter.post("continents/", function () { });
exports.default = continentsRouter;
