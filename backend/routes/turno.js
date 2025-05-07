// routes/turnos.js
import express from 'express';
import Turno from '../models/Turno.js';
import Disponibilidad from '../models/Disponibilidad.js';
import dayjs from 'dayjs';
import 'dayjs/locale/es.js';

const router = express.Router();

router.get('/disponibles/:fecha', async (req, res) => {
  try {
    const { fecha } = req.params; // formato esperado: YYYY-MM-DD
    const complejoId = '64fae0c8...'; // este puede venir por query o token si hay múltiples complejos

    const dia = dayjs(fecha).locale('es').format('dddd'); // ej: "miércoles"

    const disponibilidad = await Disponibilidad.findOne({
      complejoId,
      diaSemana: dia,
      estado: "activo"
    });

    if (!disponibilidad) {
      return res.status(200).json({ horariosDisponibles: [] });
    }

    const turnosReservados = await Turno.find({ fecha, complejoId });

    const horariosOcupados = turnosReservados.map(t => t.hora); // ej: "13:30"

    const horariosDisponibles = disponibilidad.horarios.filter(h =>
      !horariosOcupados.includes(h)
    );

    res.status(200).json({ horariosDisponibles });

  } catch (err) {
    console.error("Error al obtener horarios disponibles:", err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
