require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo en http://0.0.0.0:3000');
});