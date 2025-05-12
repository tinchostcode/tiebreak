
const Disponibilidad = require('../models/disponibilidad');
//import{disponibilidad} from ('../models/disponibilidad.js');


// Crear disponibilidad
const createDisponibilidad = async (req, res) => {
  try {
    const nuevaDisponibilidad = new Disponibilidad(req.body);
    const disponibilidadGuardada = await nuevaDisponibilidad.save();
    res.status(201).json(disponibilidadGuardada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las disponibilidades
const getDisponibilidades = async (req, res) => {
  try {
    const disponibilidades = await Disponibilidad.find();
    res.status(200).json(disponibilidades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDisponibilidad,
  getDisponibilidades,
};
