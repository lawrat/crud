// app/models/orderModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Chemin vers votre configuration de base de données

const Order = sequelize.define('Order', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'orders', // Assurez-vous que cela correspond au nom de votre table
    timestamps: false, // Crée les champs createdAt et updatedAt
});

// Synchroniser le modèle avec la base de données (à faire uniquement en développement)
Order.sync();

module.exports = Order;
