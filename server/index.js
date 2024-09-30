import express from 'express';
import {PORT} from './config.js';
import publicarRoutes from './routes/publicar.js';
const app = express();



app.get('/', (req, res) => {
    res.send("pagina principal");
    
})
app.use('/publicar', publicarRoutes);


app.listen(PORT);
console.log(`server corriendo en ${PORT}`)