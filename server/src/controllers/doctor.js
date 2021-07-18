const pool = require('../db')
const formidable = require("formidable")
const { uploadFile } = require("../utils/aws-s3")
const moment = require("moment")

exports.getAllDoctors = async (req, res) => {
    try {
        const allDoctors = await pool.query("SELECT * FROM doctors d NATURAL JOIN clinics c INNER JOIN " +
            "(SELECT user_created_at, user_id, user_name, email FROM users) u ON d.doctor_id = u.user_id;")
        res.status(200).json(allDoctors.rows)
    } catch (err) {
        res.status(400).json({ errMsg: err })
    }
}

exports.uploadScan = async (req, res) => {
    try {
        const form = new formidable.IncomingForm()
        form.keepExtensions = true;
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error', err)
                throw err
            }

            const { patientId } = fields
            const fileKey = `patient/scan/${patientId}-${moment().format('YYYY-MM-DD-HH:MM:SS')}`
            uploadFile(files.scanFile.path, fileKey, files.scanFile.type)
        })
        res.status(200).json({ message: "Image uploaded successfully!" })
    } catch (err) {
        res.status(400).json({ errMsg: err })
    }

}