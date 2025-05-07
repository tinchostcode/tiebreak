const express = require('express');
const router = express.Router();
const {
  createTurno,
  getTurnos,
  unirseATurno
} = require('../controllers/turnoController');

router.post('/', createTurno);
router.get('/', getTurnos);
router.post('/:turnoId/unirse', unirseATurno);

module.exports = router;
