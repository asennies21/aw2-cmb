// Modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

console.log('ejecuta cuando se levanta el servidor')

// Creamos una instancia de servidor
const app = http.createServer(async (peticion, respuesta) => {
    //console.log(peticion) //<--- viene del cliente
    console.log('se ejcuta en cada peticion')
    if (peticion.method === 'GET') {

        if (peticion.url === '/') {
            // Antes del end todo. despues nada
            respuesta.statusCode = 200
            return respuesta.end(`
                ruta raiz /
                `) // <--- 
        }
        if (peticion.url === '/usuarios') {
            // Antes del end todo. despues nada
            respuesta.statusCode = 200
            return respuesta.end(`
                    ruta usuarios /usuarios
                    `) // <--- 
        }
    }
    if (peticion.method === 'POST') {
        if (peticion.url === '/') {

            const ruta = './contenido.txt'
            await fsp.writeFile(ruta, 'Contenido falso')

            return respuesta.end('Recurso creado')
        }
    }
    ///---------------------------------------
    // Fallback
    respuesta.statusCode = 404
    return respuesta.end('No se encontro la ruta')
})

// Abrimos puerto
app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`)
})




// function x(otrafunc){
//     // logica mas larga
//     otrafunc()
// }

// x(()=>{console.log('funcion pasada y ejecutada')})