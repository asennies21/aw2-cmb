import pg from 'pg'

// Clase Pool -> hacer consultas simples

const pool = new pg.Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'tienda',
    port: 5432
})
// Exportamos para hacerlo vicible desde otro modulo
// default es no nombrado -> se importa in las llaves
export default pool