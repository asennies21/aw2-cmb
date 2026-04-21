// ExpressJS -> framework de JS para cerar servidores
import express from 'express'

const PUERTO = 3000

// Instancia de servidor
const app = express()
app.use(express.urlencoded())
// Verbo y Ruta configurada -> GET /
app.get('/',(req, res)=>{
    res.end('Hola expressJS')
})

// Verbo y Ruta configurada -> GET /usuarios
app.get('/usuarios',(req, res)=>{
    res.end('Hola expressJS en /usuarios')
})

// Verbo y Ruta configurada -> GET /usuarios
app.post('/',(req, res)=>{
    console.log(req.body)
    res.end('Hola POST en /ddsdsd')
})

// Abro puerto para escuchar peticiones
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})


