// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [{ doctor: 'Dr Bukayo Saka', image: true, date: '20/07/2021' }];
var website = [
  'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
  'Sign contract for "What are conference organizers afraid of?"',
];
var server = [
  'Lines From Great Russian Literature? Or E-mails From My Boss?',
  'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
  'Sign contract for "What are conference organizers afraid of?"',
];

const DOCTOR_ONGOING = [{ patient: 'Mary Lee', image: false, date: '20/07/2021' }, { patient: 'Joseph Khoo', image: false, date: '18/07/2021' }, { patient: 'Chen Chen', image: true, date: '15/07/2021' }];
const DOCTOR_PENDING = [{ patient: 'Reuben Loo', image: false, date: '19/07/2021' }];
const DOCTOR_COMPLETED = [{ patient: 'David Chan', image: true, date: '10/07/2021' }, { patient: 'Claire Chan', image: true, date: '10/07/2021' }];

module.exports = {
  DOCTOR_ONGOING,
  DOCTOR_PENDING,
  DOCTOR_COMPLETED,
  bugs,
  website,
  server,
};
