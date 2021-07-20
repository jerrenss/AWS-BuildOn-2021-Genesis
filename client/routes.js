/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';

const patientRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    rtlName: 'لوحة القيادة',
    icon: HomeIcon,

    layout: '/admin',
  },
  {
    path: '/table-list',
    name: 'Appointment',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: AssignmentIcon,

    layout: '/admin',
  },
  {
    path: '/doctor-list',
    name: 'Doctors',
    rtlName: 'قائمة الجدول',
    icon: Person,

    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Profile',
    rtlName: 'الرموز',
    icon: AccountCircleIcon,

    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Settings',
    rtlName: 'خرائط',
    icon: SettingsIcon,

    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Log out',
    rtlName: 'إخطارات',
    icon: ExitToAppIcon,

    layout: '/admin',
  },
];

const doctorRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    rtlName: 'لوحة القيادة',
    icon: HomeIcon,

    layout: '/doctor',
  },
  {
    path: '',
    name: 'Lab Reports',
    rtlName: 'طباعة',
    icon: LibraryBooks,

    layout: '#',
  },
  {
    path: '',
    name: 'Profile',
    rtlName: 'الرموز',
    icon: AccountCircleIcon,

    layout: '#',
  },
  {
    path: '',
    name: 'Settings',
    rtlName: 'خرائط',
    icon: SettingsIcon,

    layout: '#',
  },
  {
    path: '',
    name: 'Log out',
    rtlName: 'إخطارات',
    icon: ExitToAppIcon,

    layout: '#',
  },
];

module.exports = {
  patientRoutes,
  doctorRoutes,
};
