const express = require('express');
const router = express.Router();

const {
  createDisponibilidad,
  getDisponibilidades,
} = require('../controllers/disponibilidadController');

router.post('/', createDisponibilidad);
router.get('/', getDisponibilidades);

module.exports = router;
