const express = require('express');
const { createRepuesto, getRepuestos } = require('../controllers/repuestoController');
const router = express.Router();

router.post('/', createRepuesto);
router.get('/', getRepuestos);

module.exports = router;
