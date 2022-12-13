import supertest from 'supertest'
import server from '@/app'
import { characters } from '@/db'
import { createCharacterBody, createInvalidCharacterBody } from './factory/characterFactory'

const api = supertest(server)

describe("GET /characters", () => {
  it("Should respond with status 200 and all the characters", async () => {
    const result = await api.get('/characters')

    expect(result.status).toBe(200);
    expect(result.body).toEqual(expect.arrayContaining(
      characters.map(char => expect.objectContaining({
        id: char.id,
        firstName: char.firstName,
        lastName: char.lastName,
        fullName: char.fullName,
        title: char.title,
        family: char.family,
        image: char.image,
        imageUrl: char.imageUrl
      })
      )
    ))
  })
})

describe("POST /characters", () => {
  it("Should respond with status 400 if request body is not correct", async () => {
    const body = createInvalidCharacterBody();

    const result = await api.post("/characters").send(body)

    expect(result.status).toBe(400);
  })

  it("Should respond with status 404 if character fullName exists", async () => {
    const body = createCharacterBody("Yara Greyjoy");

    const result = await api.post("/characters").send(body)

    expect(result.status).toBe(404);
  })

  it("Should respond with status 201", async () => {
    const body = createCharacterBody()

    const result = await api.post("/characters").send(body)

    expect(result.status).toBe(201)
    expect(result.body).toEqual({
      id: characters[characters.length - 1].id,
      firstName: body.firstName,
      lastName: body.lastName,
      fullName: body.fullName,
      title: body.title,
      family: body.family,
      image: body.image,
      imageUrl: body.imageUrl
    })
  })
})

describe("GET /characters/:characterId", () => {
  it("Should respond with status 400 if characterId is not a number", async () => {
    const result = await api.get("/characters/a")

    expect(result.status).toBe(400)
  })

  it("Should respond status 404 if character id does not exist", async () => {
    const result = await api.get("/characters/60")

    expect(result.status).toBe(404)
  })

  it("Should respond with status 200 and the given character", async () => {
    const result = await api.get("/characters/20")

    const body = characters.find(e => e.id === 20)

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      id: body.id,
      firstName: body.firstName,
      lastName: body.lastName,
      fullName: body.fullName,
      title: body.title,
      family: body.family,
      image: body.image,
      imageUrl: body.imageUrl
    })
  })
})