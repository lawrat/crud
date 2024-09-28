const express = require('express');
const bodyParser = require('body-parser');
const orderController = require('./app/controllers/orderController'); // Vérifiez ce chemin
require('./app/services/rabbitMQ'); // Lancer RabbitMQ

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route pour créer une commande
app.post('/orders', orderController.createOrder);

// Route pour récupérer toutes les commandes
app.get('/orders', orderController.getAllOrders); // Vérifiez que cette méthode existe

// Route pour récupérer une commande par ID
app.get('/orders/:id', orderController.getOrderById); // Vérifiez que cette méthode existe

// Route pour supprimer une commande
app.delete('/orders/:id', orderController.deleteOrder); // Vérifiez que cette méthode existe

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
