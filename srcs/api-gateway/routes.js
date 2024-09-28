const express = require('express');
const router = express.Router();

// Route pour l'API de facturation
router.get('/api/orders', (req, res) => {
    console.log("GET /api/orders was called"); // Log lorsque cette route est atteinte

    // Ici, vous pouvez appeler l'API de facturation ou renvoyer une réponse fixe
    // Exemple d'une réponse fixe pour le test
    res.send("This is the orders endpoint");
});

// Ajoutez d'autres routes ici si nécessaire

module.exports = router;
