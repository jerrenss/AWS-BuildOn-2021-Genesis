// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [{ patientId: 1, doctor: 'Dr Bukayo Saka', image: true, date: '20/07/2021' }];
var doctors = [
  {
    name: 'Dr Alison Becker', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Bukayo Saka', earliestDate: '21/07/2021', rating: 4, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Cristiano Ronaldo', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Daniel Alves', earliestDate: '21/07/2021', rating: 3, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Emerson Royale', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Francis Coquelin', earliestDate: '21/07/2021', rating: 4, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Gerard Moreno', earliestDate: '21/07/2021', rating: 3, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Jadon Sancho', earliestDate: '21/07/2021', rating: 4, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Keylor Navas', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    qualification: 'PhD in Medicine', expertise: 'General Practitioner'
  },
  {
    name: 'Dr Leonardo Bonucci', earliestDate: '21/07/2021', rating: 5, displayImage: 'https://i.pinimg.com/originals/1a/9e/9b/1a9e9be4eb35017ac74ac0c7c011ba19.png',
    hospital: 'Hospital Del Luna', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
  { patientId: 1, patient: 'Mary Lee', image: false, date: '31/07/2021' },
  { patientId: 2, patient: 'Joseph Khoo', image: false, date: '01/08/2021' },
  { patientId: 3, patient: 'Chen Chen', image: true, date: '03/08/2021' },
];
const DOCTOR_PENDING = [
  { patientId: 4, patient: 'Reuben Loo', date: '05/08/2021', symptoms: 'Cough, Fever, Sore Throat' },
];
const DOCTOR_COMPLETED = [
  { patientId: 5, patient: 'David Chan', image: true, date: '10/07/2021' },
  { patientId: 6, patient: 'Claire Chan', image: true, date: '10/07/2021' },
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
};
