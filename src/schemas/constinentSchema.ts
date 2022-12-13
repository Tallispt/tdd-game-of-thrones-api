import Joi from "joi";

export const ContinentSchema = Joi.object({
  name: Joi.string().required()
})

export const ContinentIdSchema = Joi.object({
  continentId: Joi.number()
})