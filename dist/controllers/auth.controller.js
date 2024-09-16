"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
    //req.body = {email:'asdas', pass:'123213'}
    //validation, express-validator, joi, zod
    // store in database - mongodb, mysql, pg, etc
    // generate token - laskdalksjdlaskj1223123123
    const token = jsonwebtoken_1.default.sign({
        //objeto del usuario
        email: "test",
        profile: ""
    }, /** Pa cifrar*/ 'secret', {
        //cuanto tiempo quiero que dure el token o si esta bajo un dominio
        expiresIn: 60 * 60 * 24 //son en ms, en este caso queremos 24 horas
    });
    return res.json({
        token
    });
};
exports.loginHandler = loginHandler;
const profileHandler = (req, res) => {
    //si llegamos a esta ruta es porque ya estamos logueados
    return res.json({
        message: "Profile data"
    });
};
exports.profileHandler = profileHandler;
