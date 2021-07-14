const pool = require('../db')

exports.getAllDoctors = async (req, res) => {
    try {
        const allDoctors = await pool.query("SELECT * FROM doctors d NATURAL JOIN clinics c INNER JOIN " +
            "(SELECT user_created_at, user_id, user_name, email FROM users) u ON d.doctor_id = u.user_id;")
        res.status(200).json(allDoctors.rows)
    } catch (err) {
        res.status(400).json({ errMsg: err })
    }
}