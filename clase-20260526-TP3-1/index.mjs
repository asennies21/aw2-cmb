import express from 'express'
import './iniciar.env.mjs'
// Importamos rutas del modulo productos
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs'

// Variables de entorno
// Como acceder?
// console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000

const app = express()
// Le avisamos a express que use las rutas del modulo productos
app.use(rutasModuloProductos)

app.listen(PUERTO, ()=>{
    console.log(`Servidor en http://localhost:3000`)
})
