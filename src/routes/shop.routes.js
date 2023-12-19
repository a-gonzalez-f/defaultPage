// Configuración express router

const express = require('express');
const router = express.Router();

// Importamos el controlador shop.controller.js y agregamos ruta al router.get, post, etc

const controller = require('../controllers/shop.controller');

router.get('/', controller.shop);
router.get('/item/:id', controller.item);
router.post('/item/:id/add', controller.addItem);
router.get('/cart', controller.cart);
router.post('/cart', controller.addToCart);

// Exportación
module.exports = router;
