const Repuesto = require('../models/repuesto');

// Crear repuesto
exports.createRepuesto = async (req, res) => {
  const { nombre, codigo_barras, descripcion, categoria_id, stock_actual, stock_minimo } = req.body;

  try {
    const repuesto = await Repuesto.create({ nombre, codigo_barras, descripcion, categoria_id, stock_actual, stock_minimo });
    res.status(201).json(repuesto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los repuestos
exports.getRepuestos = async (req, res) => {
  try {
    const repuestos = await Repuesto.findAll();
    res.json(repuestos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
