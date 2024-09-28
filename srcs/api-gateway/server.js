require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`API Gateway en cours d'exécution sur le port ${PORT}`);
});
