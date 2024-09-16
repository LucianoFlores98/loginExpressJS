import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

//Si yo quiero asegurar la ruta que es profile, primero ejecutare esta función 
export const requireAuth = (req:Request, res:Response, next: NextFunction) => {
  //req: los datos que me envió el cliente
  //Para validar si una ruta esta autenticada o no, debemos chequear su header
  const authHeader = req.headers.authorization //authorization es un string para la autenticacion

  if (!authHeader) return res.status(401).json({ //si no esta autenticado, retornamos un error 401 y un mensaje
    message: "No autorizado"
  })

  const token = authHeader.split(' ')[1] // Dividimos en 2 y tomamos solamente el segundo valor pq se espera que nuestro token tenga el siguiente formato "Bearer 123123213"

  if (!token) return res.status(401).json({ //si no esta autenticado, retornamos un error 401 y un mensaje
    message: "No autorizado"
  })

  //Verificamos si el token fue creado por nuestro sistema
  jwt.verify(token, 'secret', (err, user)=>{ //El string secret es un valor que le pasamos para el cifrado, debe ser el mismo que utilizamos cuando logueamos al usuario utilizando sign()
    
    if (err) return res.status(401).json({ //si no esta autenticado, retornamos un error 401 y un mensaje
      message: "No autorizado"
    })

    //Compartiremos esta info creando una variable en el request
    req.user = user
    next() //Es muy importante este next para que continue porque Acordarse que esto es un Middleware
  })

  next()
}