// Configuración express router

const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');

const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

// Importamos el controlador admin.controller.js y agregamos ruta al router.get

const controller = require('../controllers/admin.controller');

const createValidation = [
    body('categoria')
        .notEmpty()
        .withMessage('Seleccione la categoría del producto'),
    body('licencia')
        .notEmpty()
        .withMessage('Seleccione la licencia del producto'),
    body('nombre')
        .notEmpty()
        .withMessage('Ingrese el nombre del producto'),
    body('descripcion')
        .notEmpty()
        .withMessage('Ingrese la descripción del producto'),
    body('sku')
        .notEmpty()
        .withMessage('Ingrese el SKU del producto'),
    body('precio')
        .notEmpty()
        .withMessage('Ingrese el precio del producto'),
    body('stock')
        .notEmpty()
        .withMessage('Ingrese el stock del producto'),
];

const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
        return next();
    };
    
    return res.status(401).send('Debes loguearte para entrar a esta Vista');
}

router.get('/', isLogged, controller.admin);
router.get('/create', isLogged, controller.createView);
router.post('/create', isLogged, upload.array('imagenes', 2), createValidation, validateInput, controller.createItem);
router.get('/edit/:id', isLogged, controller.editView);
router.put('/edit/:id', isLogged, upload.array('imagenes', 2), createValidation, validateInput, controller.editItem);
router.delete('/delete/:id', isLogged, controller.deleteItem);

// Exportación
module.exports = router;
