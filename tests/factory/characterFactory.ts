import { faker } from '@faker-js/faker'

export function createCharacterBody(fullNameSet?: string) {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = fullNameSet ? fullNameSet : firstName + lastName
  return {
    firstName,
    lastName,
    fullName,
    title: faker.company.name(),
    family: faker.color.human(),
    image: `${faker.lorem.word()}.jpg`,
    imageUrl: faker.image.imageUrl()
  }
}

export function createInvalidCharacterBody() {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  return {
    firstName: '',
    lastName,
    fullName: firstName + lastName,
    title: faker.company.name(),
    family: faker.color.human(),
    image: `${faker.lorem.word()}.jpg`,
    imageUrl: faker.image.imageUrl()
  }
}