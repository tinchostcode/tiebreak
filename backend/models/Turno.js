const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  fecha: { type: String, required: true }, // yyyy-mm-dd
  hora: { type: String, required: true },  // hh:mm
  cancha: { type: String, required: true },
  jugadores: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      nombre: String,
    },
  ],
  estado: { type: String, enum: ['en formación', 'completo'], default: 'en formación' }
});

module.exports = mongoose.model('Turno', turnoSchema);
