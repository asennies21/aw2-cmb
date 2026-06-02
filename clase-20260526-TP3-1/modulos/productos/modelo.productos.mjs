import pool from '../../bd/conexion.bd.mjs'

// GET
export async function obtenerTodos(){
    const resultado = await pool.query('SELECT * FROM productos') //<--- promesa
    return resultado
}
