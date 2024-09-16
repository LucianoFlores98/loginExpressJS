//Recibirá los parametros y retornará el token
import { Request, Response } from "express"
import jwt from 'jsonwebtoken'

export const loginHandler = (req:Request, res:Response) => {
  
  //req.body = {email:'asdas', pass:'123213'}
  //validation, express-validator, joi, zod
  // store in database - mongodb, mysql, pg, etc
  // generate token - laskdalksjdlaskj1223123123
  
  const token = jwt.sign({
    //objeto del usuario
    email: "test",
    profile: ""
  }, /** Pa cifrar*/'secret', {
    //cuanto tiempo quiero que dure el token o si esta bajo un dominio
    expiresIn: 60 * 60 * 24 //son en ms, en este caso queremos 24 horas
  })

  return res.json({
    token
  })
}

export const profileHandler = (req:Request, res:Response) => {
  //si llegamos a esta ruta es porque ya estamos logueados
  return res.json({
    profile: req.user,
    message:"Profile data"
  })
}