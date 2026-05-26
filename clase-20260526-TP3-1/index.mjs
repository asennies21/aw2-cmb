import express from 'express'
// Importamos rutas del modulo productos
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000

const app = express()
// Le avisamos a express que use las rutas del modulo productos
app.use(rutasModuloProductos)

app.listen(PUERTO, ()=>{
    console.log(`Servidor en http://localhost:3000`)
})
