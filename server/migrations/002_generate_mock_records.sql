INSERT INTO users (user_name, email, password_hash) VALUES 
('Albert Loo', 'albertloo@gmail.com', 'password'),
('Beverly Koh', 'beverlykoh@gmail.com', 'password'),
('Charles Wong', 'charleswong@gmail.com', 'password'),
('Debbie Kwa', 'debbiekwa@gmail.com', 'password'),
('Emile Sim', 'emilesim@gmail.com', 'password'),
('Flora Wang', 'florawang@gmail.com', 'password'),
('George Toh', 'gerogetoh@gmail.com', 'password'),
('Hillary Tan', 'hillaryTan@gmail.com', 'password'),
('Ivan Zheng', 'ivanzheng@gmail.com', 'password'),
('Janet Chan', 'janetchan@gmail.com', 'password');

INSERT INTO clinics (clinic_name) VALUES
('Hospital A'),
('Hospital B'),
('Hospital C'),
('Hospital D'),
('Hospital E'),
('Clinic F'),
('Clinic G'),
('Clinic H'),
('Clinic I'),
('Clinic J');

INSERT INTO doctors (doctor_id, clinic_id, qualification, expertise, rating) VALUES
(1, 1, 'PhD in Medicine', 'General Practitioner', 4.50),
(2, 1, 'PhD in Medicine', 'Pulmonologist', 4.50),
(3, 1, 'PhD in Medicine', 'Dermatologist', 4.00),
(4, 2, 'PhD in Medicine', 'General Practitioner', 4.00),
(5, 2, 'PhD in Medicine', 'Cardiologist', 5.00);

INSERT INTO patients (patient_id, history) VALUES
(6, 'https://s3.amazonaws.com/doctoristic-dev/patient/history/1.pdf'),
(7, 'https://s3.amazonaws.com/doctoristic-dev/patient/history/2.pdf'),
(8, 'https://s3.amazonaws.com/doctoristic-dev/patient/history/3.pdf'),
(9, 'https://s3.amazonaws.com/doctoristic-dev/patient/history/4.pdf'),
(10, 'https://s3.amazonaws.com/doctoristic-dev/patient/history/5.pdf');

INSERT INTO consultations (doctor_id, timeslot, status) VALUES
(1, '2021-07-25 09:00:00.099844+00', 0),
(1, '2021-07-25 10:00:00.099844+00', 0),
(1, '2021-07-25 11:00:00.099844+00', 0),
(1, '2021-07-25 12:00:00.099844+00', 0),
(1, '2021-07-25 13:00:00.099844+00', 0),
(1, '2021-07-26 09:00:00.099844+00', 0),
(1, '2021-07-26 10:00:00.099844+00', 0),
(1, '2021-07-26 11:00:00.099844+00', 0),
(1, '2021-07-26 12:00:00.099844+00', 0),
(1, '2021-07-26 13:00:00.099844+00', 0);