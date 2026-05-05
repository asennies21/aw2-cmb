import express from 'express'
import {obtenerProductos, obtenerProducto, eliminarProducto} from './funciones.mjs'
// import productos from './productos.mjs'
// BD -------------


const PUERTO = 3000

const app = express()

// Definiendo una API REST

// GET /api/v1/productos -> todos

app.get('/api/v1/productos',obtenerProductos)

// GET /api/v1/productos/:id -> uno por ID

app.get('/api/v1/productos/:id', obtenerProducto)

// POST /api/v1/productos -> dar de alta un nuevo producto

// PUT /api/v1/productos/:id -> modificar un producto

// DELETE /api/v1/productos/:id
app.delete('/api/v1/productos/:id', eliminarProducto)


app.listen(PUERTO)