const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/controleReagentes');


// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
