//Es importante agregar la d para definir que estamos agregando un tipo de dato que se va a añadir a nuestro entorno de desarrollo. Algunos modulos van a saber que le pertenecen ese tipo de dato

//NO es comun realizar este tipo de declaraciones, lo hacemos ahora porque estamos extendiendo un tipo de dato que usaremos
declare namespace Express {
  export interface Request{
    user: any
  }
}