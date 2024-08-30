// Routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts } = require('../Controllers/ProductController');

const router = express.Router();

// Ruta para crear productos
router.post('/', createProduct);

// Ruta para obtener productos
router.get('/', getProducts);

module.exports = router;
