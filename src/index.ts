import express from 'express';
import morgan from 'morgan';
import database from './database';
import cors from 'cors';
// Importando rutas
import router from './routes';

// Inicializaciones
const app = express();

// Configuración
/* Si utilizo los servicios de la nube, ellos me dan un puerto que utilizo (process.env.PORT) */
app.set('port', process.env.PORT || 4000);
app.use(cors({origin: "http://localhost:4200"}));

// Middlewares
/* para que express entienda lo que recibe en formato json y lo que le llegue a través de los formularios */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Rutas
app.use('/api', router);

// Archivos estáticos

// Arrancando el Servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
    console.log(`Using mongoDB version: ${database.version}`);
});