const amqp = require('amqplib');
require('dotenv').config();
const { Order } = require('../models/orderModel');
async function processOrder(order) { // Renommez ici
    try {
        console.log('Commande reçue pour insertion :', order);
        const newOrder = await Order.create(order); // Utilisez le modèle Order ici
        console.log('Commande insérée :', newOrder);
    } catch (error) {
        console.error('Erreur lors du traitement de la commande:', error);
    }
}


async function start() {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        const queue = 'orders';

        await channel.assertQueue(queue, {
            durable: true,
        });

        console.log('En attente de messages dans la queue:', queue);
        channel.consume(queue, (msg) => {
            const order = JSON.parse(msg.content.toString());
            processOrder(order);
            channel.ack(msg); // Accuse réception du message
        });
    } catch (error) {
        console.error('Erreur de connexion à RabbitMQ:', error);
    }
}

start();
