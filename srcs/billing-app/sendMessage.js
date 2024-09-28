const amqp = require('amqplib');
require('dotenv').config();

async function sendMessage(order) {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        const queue = 'orders';

        await channel.assertQueue(queue, {
            durable: true,
        });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)), {
            persistent: true,
        });

        console.log('Message envoyé:', order);
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Erreur d\'envoi du message:', error);
    }
}

// Exemple de commande à envoyer
const order = {
    product_id: 21, // Remplacez par l'ID du produit
    quantity: 2
};
sendMessage(order);
