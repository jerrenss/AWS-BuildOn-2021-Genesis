const express = require('express')
const { getAllDoctors, uploadScan } = require('../controllers/doctor')
const router = express.Router()

router.get('/doctors', getAllDoctors)
router.post('/doctors/upload-scan', uploadScan)

module.exports = router