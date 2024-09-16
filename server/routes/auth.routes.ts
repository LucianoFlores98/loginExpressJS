import { Router } from "express";
import { loginHandler, profileHandler } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router()

router.post('/login', loginHandler)

//Acá llamamos a nuestro middleware para que se ejecute antes de profile handler para asegurarnos de que el usuario esté logueado
router.get('/profile',requireAuth, profileHandler)

export default router