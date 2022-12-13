import Joi from 'joi'

export const CharacterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  fullName: Joi.string().required(),
  title: Joi.string().required(),
  family: Joi.string().required(),
  image: Joi.string().required(),
  imageUrl: Joi.string().uri().required()
})

export const CharacterIdSchema = Joi.object({
  characterId: Joi.number()
})