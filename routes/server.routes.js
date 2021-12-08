const { Router } = require('express')
const { check } = require('express-validator');
const { obtener } = require('../controllers/servercontroller');

const router = Router()

router.get("/docker", obtener);

module.exports = router;