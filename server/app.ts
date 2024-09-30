import express from 'express'
import authRoutes from './routes/auth.routes'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: "http://localhost:3000" //Definimos de donde provendrán nuestras peticiones (Front)
}))

app.use(authRoutes)

export default app;