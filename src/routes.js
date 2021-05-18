'use restrict'

const productsHandler = require('./handlers/products');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productsHandler.get
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productsHandler.save
    },
]