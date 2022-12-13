import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false })

    if (!error) {
      next();
    } else {
      res.status(400).send(error.details.map((e) => e.message));
    }
  }
}

export function validateParams(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params, { abortEarly: false })

    if (!error) {
      next();
    } else {
      res.status(400).send(error.details.map((e) => e.message));
    }
  }
}