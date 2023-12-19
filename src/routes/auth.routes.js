// Configuración express router

const express = require('express');
const router = express.Router();


const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

// Importamos el controlador auth.controller.js y agregamos ruta al router.get, post, etc

const controller = require('../controllers/auth.controller');

const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Ingrese un correo válido'),
    body('password')
        .isLength({min:4})
        .withMessage('La contraseña debe contener al menos 4 caracteres.'),
];

router.get('/login', controller.login);
router.post('/login', loginValidation, validateInput, controller.doLogin);
router.get('/register', controller.register);
router.post('/register', controller.doRegister);
router.get('/logout', controller.logout);

// Exportación
module.exports = router;
