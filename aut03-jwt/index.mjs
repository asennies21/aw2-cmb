// Token de acceso TID AW2 p.366

import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import pool from './conexion.bd.mjs';
dotenv.config();

const PUERTO = process.env.PUERTO || 4000;

const app = express();
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
app.use(express.json());
app.use(cookieParser());

app.post('/registrar', async (req, res) => {
    const { usuario, pass } = req.body;
    if (!usuario || !pass) {
        return res.sendStatus(400);
    }
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashingPass = bcrypt.hashSync(pass, salt);
        const resultado = await pool.query(
            'INSERT INTO usuarios (username, password_hash) VALUES ($1, $2)',
            [usuario, hashingPass]
        );
        if (resultado.rowCount > 0) {
            res.redirect('/login'); // Redirigimos al usuario a la página de login
        } else {
            res.sendStatus(500);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
// Ruta para el POST login
app.post('/autenticacion', async (req, res) => {
    const { usuario, pass } = req.body;
    if (!usuario || !pass) {
        return res.sendStatus(400);
    }
    // Verificamos la contraseña usando bcrypt
    let verificado = false;
    try {
        // Consultamos la contraseña
        const resultado = await pool.query(
            'SELECT password_hash FROM usuarios WHERE username = $1',
            [usuario]
        );
        verificado = await bcrypt.compare(
            pass,
            resultado.rows[0].password_hash
        );
        console.log(resultado);
    } catch (error) {
        return res.sendStatus(401);
    }
    if (verificado) {
        //////////////////////////////////////////////////////////////
        try {
            // Token
            // Creamos cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'Strict',
                maxAge: 24 * 60 * 60 * 1000, // 1 día
            });
            res.redirect('/'); // Redirigimos al usuario a la página principal
        } catch (error) {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});
app.get('/logout', async (req, res) => {
    // Borramos la cookie
});
// Form login
app.use('/login', express.static('login'));

/////////

app.use(express.static('front'));
