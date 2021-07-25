// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [{ doctor: 'Dr Bukayo Saka', image: true, date: '20/07/2021' }];
var doctors = [
  { name: 'Dr Bukayo Saka', earliestDate: '21/07/2021', rating: 5 },
  { name: 'Dr Emily Hunt', earliestDate: '23/07/2021', rating: 4 },
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

module.exports = {
  AVAILABLE_TIMINGS,
  DOCTOR_ONGOING,
  DOCTOR_PENDING,
  DOCTOR_COMPLETED,
  bugs,
  website,
  server,
  doctors,
};
