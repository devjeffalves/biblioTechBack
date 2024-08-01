
//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const userController = require('../controllers/userController');

router.post('/user_register', userController.createuser);

module.exports = router;