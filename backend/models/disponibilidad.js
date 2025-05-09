// models/Disponibilidad.js

/*import mongoose from "mongoose";

const disponibilidadSchema = new mongoose.Schema({
  complejoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Complejo",
    required: true,
  },
  diaSemana: {
    type: String,
    enum: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
    required: true,
  },
  horarios: [String], // ej: ["12:00", "13:30"]
  estado: {
    type: String,
    enum: ["activo", "cerrado"],
    default: "activo"
  }
});

export default mongoose.model("Disponibilidad", disponibilidadSchema);*/

//////////////////////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');

const disponibilidadSchema = new mongoose.Schema({
  complejoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Complejo',
    required: true,
  },
  diaSemana: {
    type: String,
    enum: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
    required: true,
  },
  horarios: [String], // ej: ["12:00", "13:30"]
  estado: {
    type: String,
    enum: ['activo', 'cerrado'],
    default: 'activo',
  },
});

module.exports = mongoose.model('Disponibilidad', disponibilidadSchema);

