// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

const MAIN_CHARACTER_PATIENT = "Harry Potter"
const MAIN_CHARACTER_DOCTOR = "Ron Weasly"
const MAIN_CHARACTER_SPECIALIST = "Hermione Granger"

var bugs = [{ patientId: 1, doctor: MAIN_CHARACTER_DOCTOR, image: true, date: '20/07/2021' }];
var doctors = [
  {
    name: 'Dr Ron Weasly', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Albus Dumbledore', earliestDate: '21/07/2021', rating: 4, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Severus Snape', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Rebeus Hagrid', earliestDate: '21/07/2021', rating: 3, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Luna Lovegood', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Neville Longbottom', earliestDate: '21/07/2021', rating: 4, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Sirius Black', earliestDate: '21/07/2021', rating: 3, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Dolores Umbridge', earliestDate: '21/07/2021', rating: 4, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Lucius Malfoy', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Ginny Weasly', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://www.nicepng.com/png/full/313-3130076_ron-weasley4-ron-weasley.png',
    hospital: 'Hospital Hogwarts', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
];
var website = [
  'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
  'Sign contract for "What are conference organizers afraid of?"',
];
var server = [
  'Lines From Great Russian Literature? Or E-mails From My Boss?',
  'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
  'Sign contract for "What are conference organizers afraid of?"',
];

const DOCTOR_ONGOING = [
  { patientId: 1, patient: 'Bellatrix Lestrage', image: false, date: '31/07/2021' },
  { patientId: 2, patient: 'Draco Malfoy', image: false, date: '01/08/2021' },
  { patientId: 3, patient: 'Dobby', image: true, date: '03/08/2021' },
];
const DOCTOR_PENDING = [
  { patientId: 4, patient: MAIN_CHARACTER_PATIENT, date: '05/08/2021', symptoms: 'Cough, Fever, Sore Throat' },
];
const DOCTOR_COMPLETED = [
  { patientId: 5, patient: 'Narcissa Malfoy', image: true, date: '10/07/2021' },
  { patientId: 6, patient: 'Hedwig', image: true, date: '10/07/2021' },
];
var AVAILABLE_TIMINGS = [
  {
    date: '21/07/2021',
    timings: ['11.00AM', '12.00PM', '3.00PM', '5.00PM'],
  },
  {
    date: '22/07/2021',
    timings: ['10.00AM', '12.00PM', '1.00PM', '3.00PM', '4.00PM', '5.00PM'],
  },
  {
    date: '23/07/2021',
    timings: ['11.00AM', '12.00PM', '3.00PM', '5.00PM'],
  },
  {
    date: '24/07/2021',
    timings: ['10.00AM', '12.00PM', '1.00PM', '3.00PM', '4.00PM', '5.00PM'],
  },
  {
    date: '25/07/2021',
    timings: ['11.00AM', '12.00PM', '3.00PM', '5.00PM'],
  },
  {
    date: '26/07/2021',
    timings: ['10.00AM', '12.00PM', '1.00PM', '3.00PM', '4.00PM', '5.00PM'],
  },
  {
    date: '27/07/2021',
    timings: ['11.00AM', '12.00PM', '3.00PM', '5.00PM'],
  },
  {
    date: '28/07/2021',
    timings: ['11.00AM', '12.00PM', '3.00PM', '5.00PM'],
  },
  {
    date: '29/07/2021',
    timings: ['10.00AM', '12.00PM', '1.00PM', '3.00PM', '4.00PM', '5.00PM'],
  },
  {
    date: '30/07/2021',
    timings: ['11.00AM', '12.00PM', '3.00PM', '5.00PM'],
  },
  {
    date: '31/07/2021',
    timings: ['10.00AM', '12.00PM', '1.00PM', '3.00PM', '4.00PM', '5.00PM'],
  },
];

const LUNG_COMPLICATIONS = [
  { complication: 'Atelectasis', probability: 0.802 },
  { complication: 'Cardiomegaly', probability: 0.884 },
  { complication: 'Effusion', probability: 0.873 },
  { complication: 'Infiltration', probability: 0.698 },
  { complication: 'Mass', probability: 0.821 },
  { complication: 'Nodule', probability: 0.817 },
  { complication: 'Pneumonia', probability: 0.739 },
  { complication: 'Pneumothorax', probability: 0.878 },
  { complication: 'Consolidation', probability: 0.785 },
  { complication: 'Edema', probability: 0.879 },
  { complication: 'Emphysema', probability: 0.933 },
  { complication: 'Fibrosis', probability: 0.822 },
  { complication: 'Pleural Thickening', probability: 0.785 },
  { complication: 'Hernia', probability: 0.911 },
]

module.exports = {
  AVAILABLE_TIMINGS,
  DOCTOR_ONGOING,
  DOCTOR_PENDING,
  DOCTOR_COMPLETED,
  bugs,
  website,
  server,
  doctors,
  LUNG_COMPLICATIONS,
  MAIN_CHARACTER_PATIENT,
  MAIN_CHARACTER_DOCTOR,
  MAIN_CHARACTER_SPECIALIST
};
