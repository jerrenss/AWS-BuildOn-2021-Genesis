const pool = require('../db')
const formidable = require("formidable")
const { uploadFile } = require("../utils/aws-s3")
const moment = require("moment")
const fetch = require("node-fetch");

exports.getAllDoctors = async (req, res) => {
    const allDoctors = await pool.query("SELECT * FROM doctors d NATURAL JOIN clinics c INNER JOIN " +
        "(SELECT user_created_at, user_id, user_name, email FROM users) u ON d.doctor_id = u.user_id;").catch(err => {
            return res.status(400).json({ errMsg: err.message })
        })
    res.status(200).json(allDoctors.rows)
}

exports.uploadScan = async (req, res) => {
    const formParseResult = await parseForm(req).catch(err => {
        return res.status(400).json({ errMsg: err.message })
    })
    if (!formParseResult[0].patientId || !formParseResult[1].scanFile) {
        return res.status(400).json({ errMsg: "Invalid fields provided!" })
    }

    const fileKey = `patient/scan/${formParseResult[0].patientId}-${moment().format('YYYY-MM-DD-HH:MM:SS')}`

    const uploadS3Result = await uploadFile(formParseResult[1].scanFile.path, fileKey, formParseResult[1].scanFile.type)
        .catch(err => {
            return res.status(400).json({ errMsg: err.message })
        })

    const mockAPIResult = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(err => {
            return res.status(400).json({ errMsg: err.message })
        })

    res.status(200).json({ message: "Image uploaded successfully!", location: uploadS3Result.Location, sagemakerRes: mockAPIResult })
}

const parseForm = (req) => {
    var form = new formidable.IncomingForm();
    return new Promise(
        function (resolve, reject) {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve([fields, files]);
                }
            })
        })
}