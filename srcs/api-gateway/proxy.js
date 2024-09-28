const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api/orders', createProxyMiddleware({
        target: process.env.BILLING_API_URL, // Vérifiez que cette URL est correcte
        changeOrigin: true,
        pathRewrite: {
            '^/api/orders': '', // Cela signifie que l'URL cible n'a pas besoin de "/api/orders"
        },
    }));
};
