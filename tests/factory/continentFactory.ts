import { faker } from "@faker-js/faker";

export function createInvalidContinentBody() {
  return {
    name: ""
  }
}

export function createContinentBody() {
  return {
    name: faker.animal.type()
  }
}