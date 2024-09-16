"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Si yo quiero asegurar la ruta que es profile, primero ejecutare esta función 
const requireAuth = (req, res, next) => {
    //req: los datos que me envió el cliente
    //Para validar si una ruta esta autenticada o no, debemos chequear su header
    const authHeader = req.headers.authorization; //authorization es un string para la autenticacion
    if (!authHeader)
        return res.status(401).json({
            message: "No autorizado"
        });
    const token = authHeader.split(' ')[1]; // Dividimos en 2 y tomamos solamente el segundo valor pq se espera que nuestro token tenga el siguiente formato "Bearer 123123213"
    if (!token)
        return res.status(401).json({
            message: "No autorizado"
        });
    //Verificamos si el token fue creado por nuestro sistema
    jsonwebtoken_1.default.verify(token, 'secret', (err, user) => {
        if (err)
            return res.status(401).json({
                message: "No autorizado"
            });
        //Compartiremos esta info creando una variable en el request
        req.user = user;
        next(); //Es muy importante este next para que continue porque Acordarse que esto es un Middleware
    });
    next();
};
exports.requireAuth = requireAuth;
