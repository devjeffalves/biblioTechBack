//Importa o objeto usuario
//const { Op } = require('sequelize');
const User = require('../models/user_register');


// Criar um novo usuário
exports.createuser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email , password});
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
  };