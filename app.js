const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./utils/db.js'); //Importamos la función connectDB desde db.js

dotenv.config(); //Cargamos las variables de entorno desde el archivo .env
const app = express(); //Creamos una instancia de Express

app.use(bodyParser.json()); //Middleware para parsear el cuerpo de las peticiones en formato JSON
//Llamamos a la función connectDB para establecer la conexión a la base de datos

connectDB().then(() => {
    const PORT = process.env.PORT || 3000; //Definimos el puerto en el que escuchará la aplicación
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`); //Mensaje de confirmación al iniciar el servidor
    });
})
    .catch (error => {
        console.error('Error al levantar el servicio', error.message); //Mensaje de error si no se puede conectar a la base de datos
    })
