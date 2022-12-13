import { validateBody, validateParams } from "@/middlewares/schemaMiddleware";
import { CharacterIdSchema, CharacterSchema } from "@/schemas/characterSchema";
import { Router } from "express";
import { getCharacterById, getCharacters, postCharacter } from "@/controller/characterController";

const charactersRouter = Router()

charactersRouter.get("/characters", getCharacters)

charactersRouter.get("/characters/:characterId", validateParams(CharacterIdSchema), getCharacterById)

charactersRouter.post("/characters", validateBody(CharacterSchema), postCharacter)

export default charactersRouter