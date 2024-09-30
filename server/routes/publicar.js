import express, { json } from "express";
import { users } from "../examples/database.js";

const publicarRoutes = express.Router();

publicarRoutes.use(express.json());

publicarRoutes.get('/', (req, res) => {
    res.send("publicacion");
});

publicarRoutes.post('/subir', (req, res) => {
    let nuevoUsuario = req.body;
    const existe = users.filter((users) => users.correo === nuevoUsuario.correo)
    if (existe.length !== 0) return res.send("EXISTE");
    
    users.push(nuevoUsuario);
    res.send(JSON.stringify(users));
});


export default publicarRoutes;