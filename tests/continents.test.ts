import supertest from "supertest";
import server from "@/app";
import { continents } from "@/db";
import { createContinentBody, createInvalidContinentBody } from "./factory/continentFactory";

const api = supertest(server)

describe("GET /continents", () => {
  it("Should respond with status 200 and all continents", async () => {
    const result = await api.get("/continents")

    expect(result.status).toBe(200)
    expect(result.body).toEqual(expect.arrayContaining(
      continents.map(cont => expect.objectContaining({
        id: cont.id,
        name: cont.name
      }))
    ))
  })

})

describe("POST /continents", () => {
  it("Should respond with status 400 if request body is not correct", async () => {
    const body = createInvalidContinentBody();

    const result = await api.post("/continents").send(body)

    expect(result.status).toBe(400);
  })

  it("Should respond with status 404 if duplicated continent", async () => {
    const body = {
      name: "Ulthos"
    };

    const result = await api.post("/continents").send(body)

    expect(result.status).toBe(404);
  })

  it("Should respond with status 201", async () => {
    const body = createContinentBody()

    const result = await api.post("/continents").send(body)

    expect(result.status).toBe(201)
    expect(result.body).toEqual({
      id: continents[continents.length - 1].id,
      name: body.name
    })
  })
})

describe("GET /continents/:continentsId", () => {
  it("Should respond with status 400 if characterId is not a number", async () => {
    const result = await api.get("/continents/a")

    expect(result.status).toBe(400)
  })

  it("Should respond status 404 if character id does not exist", async () => {
    const result = await api.get("/continents/60")

    expect(result.status).toBe(404)
  })

  it("Should respond with status 200 and the given character", async () => {
    const result = await api.get("/continents/3")

    const body = continents.find(e => e.id === 3)

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      id: body.id,
      name: body.name
    })
  })
})