const Turno = require('../models/Turno');
const User = require('../models/User');

exports.createTurno = async (req, res) => {
  try {
    const turno = new Turno(req.body);
    await turno.save();
    res.status(201).json(turno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTurnos = async (req, res) => {
  const turnos = await Turno.find().populate('jugadores.userId');
  res.json(turnos);
};

exports.unirseATurno = async (req, res) => {
  const { turnoId } = req.params;
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);
    const turno = await Turno.findById(turnoId);

    if (!turno || !user) return res.status(404).json({ error: 'Turno o usuario no encontrado' });

    if (turno.jugadores.length >= 4) {
      return res.status(400).json({ error: 'Turno ya completo' });
    }

    // evitar duplicados
    if (turno.jugadores.find(j => j.userId.equals(user._id))) {
      return res.status(400).json({ error: 'Ya está anotado en el turno' });
    }

    turno.jugadores.push({ userId: user._id, nombre: user.nombre });

    if (turno.jugadores.length === 4) {
      turno.estado = 'completo';
    }

    await turno.save();
    res.json(turno);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
