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

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
  doctors,
};
