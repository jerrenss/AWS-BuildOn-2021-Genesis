const express = require('express')
const { getAllDoctors } = require('../controllers/doctor')
const router = express.Router()

router.get('/doctors', getAllDoctors)

module.exports = router