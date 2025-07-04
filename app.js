const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const repuestoRoutes = require('./routes/repuestoRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/repuestos', repuestoRoutes);

app.listen(3000, async () => {
  console.log('Servidor corriendo en http://localhost:3000');
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
});
