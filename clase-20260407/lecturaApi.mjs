// console.log('todo ok')
// FS gestion de archivos en node
import fsp from 'node:fs/promises';
// Gestin de nombres de rutas en los distintos OS
import path from 'node:path'

try {

    // Leemos la api via fetch y me devuelve un Obj Response
    const respuesta = await fetch('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
    // Extraer el cuerpo en fomrato JSON y convertilo a un Arreglo/Objeto
    const productos = await respuesta.json() //<---- arreglo js
    const ruta = path.join('./datosApi.json')
    // Convertimos un Obj JS - Arreglo u Objeto a un JSON
    const datosAguardar = JSON.stringify(productos, null, 4)
    // Escribimos archivo

    await fsp.writeFile(ruta, datosAguardar)


} catch (e) {
    console.log(e)
}
