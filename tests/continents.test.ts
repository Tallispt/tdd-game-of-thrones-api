import supertest from "supertest";
import server from "@/app";
import { continents } from "@/db";

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

// describe("POST /continents", () => {
//   it("Should respond with", async () => {

//   })

// })