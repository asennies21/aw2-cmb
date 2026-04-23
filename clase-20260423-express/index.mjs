// ExpressJS -> framework de JS para cerar servidores
import express from 'express'

const PUERTO = 3000

const app = express()

// Avisamos a Express -> chequear datos del cliente -> cuerpo (configuracion)
// app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ---------------
const productos = [
    {
        id: 1,
        nombre: 'camiseta',
        precio: 20000
    },

    {
        id: 2,
        nombre: 'pantalon',
        precio: 35000
    }
]




const obtenerRaiz = (req, res) => {
    res.end('Estas en la raiz')
}

app.get('/', obtenerRaiz)


app.get('/usuarios', (req, res) => {

    const miObjeto = {
        materia: 'AW2'
    }

    res.status(200)

    res.json(miObjeto)
    //res.set('content-type','application/json')
    //res.send('{"materia":"AW2"}')
})

app.get('/productos', (req, res) => {

    res.json(productos)
})
app.get('/productos/:id', (req, res) => {

    const id = parseInt(req.params.id)

    // Filtrar
    // const productosFiltrados = productos.filter((producto)=>{
    //     return (producto.id === id)
    // })
    const productosFiltrados = productos.filter((producto) => producto.id === id)
    if (productosFiltrados.length > 0) {
        return res.json(productosFiltrados)
    }
    res.json({ "mensaje": "Producto no encontrado" })

})

// Envio datos al servidor
app.post('/productos', (req, res) => {
    // Verificamos el cuerpo del mensaje
    const datosCliente = req.body;
    productos.push(datosCliente)
    res.status(201).json({mensaje:"Producto dado de alta"})

})


app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})

