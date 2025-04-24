require('dotenv').config();
const mysql = require('mysql2/promise');

//vericar si existe la variable de entorno DB_HOST
const requiredEnvVars = ['DB_HOST','DB_PORT', 'DB_USER', 'DB_NAME'];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        throw new Error(`Missing required environment variable: ${varName}`);
  }
});
const connectDB = async () => {
    try{
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('Conectado a la base de datos MySQL');
        return connection;
    }catch (error) {
        console.error('Error al conectar a la base de datos', error.message);
        throw error;
    }
};

module.exports = connectDB;

