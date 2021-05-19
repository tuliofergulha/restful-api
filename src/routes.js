'use restrict'

const productHandler = require('./handlers/product');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.getById
    },
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.get
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save
    },
    {
        method: 'PUT',
        path: '/api/v1/products/{id}',
        handler: productHandler.update
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove
    },
]