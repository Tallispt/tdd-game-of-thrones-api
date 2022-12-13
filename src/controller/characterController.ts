import { characters } from "@/db";
import { Character } from "@/protocol";
import { Request, Response } from "express"

function getCharacters(_req: Request, res: Response) {
  res.status(200).send(characters)
}

function postCharacter(req: Request, res: Response) {
  const body = req.body as Omit<Character, "id">

  characters.push({
    id: characters[characters.length - 1].id + 1,
    ...body
  })

  const lastCharacter = characters[characters.length - 1]

  res.status(201).send(lastCharacter)
}

function getCharacterById(req: Request, res: Response) {
  const { characterId } = req.params;

  const resp = characters.find(character => character.id === Number(characterId))

  if (!resp) {
    return res.sendStatus(404)
  }

  res.status(200).send(resp)
}

export {
  getCharacters,
  postCharacter,
  getCharacterById
}