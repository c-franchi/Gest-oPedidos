const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/gerenciamento-pedidos')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Connection error', err);
  });

// Rotas
const authRoutes = require('../routes/auth');
const orderRoutes = require('../routes/orders');
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
