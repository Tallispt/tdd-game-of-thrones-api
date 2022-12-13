import { getContinents, getContinentsById, postContinents } from "@/controller/continentController";
import { validateBody, validateParams } from "@/middlewares/schemaMiddleware";
import { ContinentIdSchema, ContinentSchema } from "@/schemas/constinentSchema";
import { Router } from "express";

const continentsRouter = Router()

continentsRouter.get("/continents", getContinents)
continentsRouter.get("/continents/:continentId", validateParams(ContinentIdSchema), getContinentsById)
continentsRouter.post("/continents", validateBody(ContinentSchema), postContinents)

export default continentsRouter