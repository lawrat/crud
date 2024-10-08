const express = require('express');
require('dotenv').config(); // Charge les variables d'environnement
const sequelize = require('./app/config/config'); // Charge la config Sequelize
const db = require('./app/models'); // Charge la configuration des modèles
const movieRoutes = require('./app/routes/movie.routes'); // Importez les routes pour les films

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // Middleware pour gérer les requêtes JSON

// Utilisation des routes pour les films
app.use('/api/movies', movieRoutes);

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'application d\'inventaire !');
});

// Vérifiez les variables d'environnement
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

// Démarrage du serveur et synchronisation avec la base de données
app.listen(PORT, async () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}.`);
  
  try {
    await db.sequelize.authenticate(); // Vérifiez la connexion à la base de données
    console.log('Connexion à la base de données réussie.');

    await db.sequelize.sync(); // Synchronise les modèles avec la base de données
    console.log('Base de données synchronisée.');
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
  }
});
