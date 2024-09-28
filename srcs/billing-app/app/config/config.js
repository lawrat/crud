const { Pool } = require('pg');
require('dotenv').config();

console.log('Connecting to database with user:', process.env.DB_USER);
console.log('Using password:', process.env.DB_PASS); // Cela affichera le mot de passe dans la console

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

module.exports = pool;
