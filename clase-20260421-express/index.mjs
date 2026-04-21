// ExpressJS -> framework de JS para cerar servidores
import express from 'express'

const PUERTO = 3000

// Instancia de servidor
const app = express()

// Verbo y Ruta configurada -> GET /
app.get('/',(req, res)=>{
    res.status(200)
    res.send('Hola expressJS')
})

// Verbo y Ruta configurada -> GET /usuarios
app.get('/usuarios',(req, res)=>{
    res.status(200)
    res.set('content-type','text/html')
    res.send('<h1>Hola expressJS en /usuarios</h1>')
})

// Verbo y Ruta configurada -> GET /usuarios
app.post('/',(req, res)=>{
    res.status(201)
    res.send('Hola POST en /')
})

// Abro puerto para escuchar peticiones
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})


