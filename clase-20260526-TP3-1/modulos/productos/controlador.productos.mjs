import * as modelo from './modelo.productos.mjs'


// GET
export async function obtenerTodos(req, res){
    // Obtenemos la consulta a BD desde la capa modelo
    const respuesta = await modelo.obtenerTodos()//<--- funcion asíncrona
    // Respuesta tiene todos los datos de la consulta
    const respuestaDatos = respuesta.rows //<-- opcional pasarlo a capa vista
    /*
    respuesta:
    consulta,
    campos,
    datos de la tabla -> rows <---- Arreglo
    */
    
    res.json(respuestaDatos) //<--- ese arreglo
}

