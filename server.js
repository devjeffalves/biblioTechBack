const express = require('express');
const sequelize = require('./data_base/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
//app.use('/api', userRoutes);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});