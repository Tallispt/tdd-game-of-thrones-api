import { continents } from "@/db";
import { Continent } from "@/protocol";
import { Request, Response } from 'express';


function getContinents(_req: Request, res: Response) {
  res.status(200).send(continents)
}

function postContinents(req: Request, res: Response) {
  const continentData = req.body as Omit<Continent, "id">

  const continentExists = continents.find(cont => cont.name === continentData.name)
  if (continentExists) {
    return res.sendStatus(404)
  }

  continents.push({
    id: continents[continents.length - 1].id + 1,
    ...continentData
  })

  const lastContinent = continents[continents.length - 1]

  res.status(201).send(lastContinent)
}

function getContinentsById(req: Request, res: Response) {
  const { continentId } = req.params;

  const resp = continents.find(cont => cont.id === Number(continentId))

  if (!resp) {
    return res.sendStatus(404)
  }

  res.status(200).send(resp)
}

export {
  getContinents,
  postContinents,
  getContinentsById
}