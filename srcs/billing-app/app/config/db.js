// app/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Assurez-vous que le dialecte correspond à votre base de données
    logging: false, // Désactivez le logging si vous ne souhaitez pas voir les requêtes SQL dans la console
});

module.exports = sequelize;
