SET TIMEZONE = 'Asia/Singapore';

CREATE TABLE IF NOT EXISTS Users (
   	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
  	password_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Clinics (
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    clinic_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Doctors (
    doctor_id INTEGER PRIMARY KEY REFERENCES Users,
  	clinic_id INTEGER REFERENCES Clinics,
    qualification TEXT NOT NULL,
    expertise TEXT UNIQUE NOT NULL,
  	rating NUMERIC NOT NULL
);

CREATE TABLE IF NOT EXISTS Patients (
    patient_id INTEGER PRIMARY KEY REFERENCES Users,
  	history TEXT
);

CREATE TABLE IF NOT EXISTS Consultations (
  	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    consultation_id SERIAL PRIMARY KEY,
  	doctor_id INTEGER REFERENCES Doctors,
   	patient_id INTEGER REFERENCES Patients,
    recording_file TEXT,
    notes_file TEXT UNIQUE NOT NULL,
  	timeslot TIMESTAMPTZ NOT NULL,
  	status SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS Deliveries (
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    delivery_id SERIAL PRIMARY KEY,
  	consultation_id INTEGER REFERENCES Consultations,
  	items JSON NOT NULL
);

CREATE TABLE IF NOT EXISTS Chats (
  	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    chat_id SERIAL PRIMARY KEY,
  	doctor_id INTEGER NOT NULL REFERENCES Doctors,
  	patient_id INTEGER NOT NULL REFERENCES Patients
);

CREATE TABLE IF NOT EXISTS Messages (
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    chat_id INTEGER PRIMARY KEY REFERENCES Chats,
  	user_id INTEGER REFERENCES Users,
  	text_content TEXT,
  	file_content TEXT
);
