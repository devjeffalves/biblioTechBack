const express = require('express');
const sequelize = require('./data_base/db');
const user_register = require('./routes/user_registerRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/bibliotech', user_register);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});