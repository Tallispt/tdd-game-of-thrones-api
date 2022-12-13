import { Router } from "express";

const continentsRouter = Router()

continentsRouter.get("/continents", () => { })
continentsRouter.get("/continents/:continentId", () => { })
continentsRouter.post("continents/", () => { })

export default continentsRouter