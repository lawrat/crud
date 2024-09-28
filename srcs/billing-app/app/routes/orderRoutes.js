// app/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Importer le contrôleur

// Créer une nouvelle commande
router.post('/orders', orderController.createOrder);

// Récupérer toutes les commandes
router.get('/orders', orderController.getAllOrders);

// Récupérer une commande par ID
router.get('/orders/:id', orderController.getOrderById);

// Supprimer une commande
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
