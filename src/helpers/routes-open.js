import {
  Register,
  PasswordRecovery,
  EmailSendPasswordRecovery,
  ChangePassword,
  EmailSendActiveAccount
} from '../views';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/register', name: 'Register', component: Register },
  { path: '/passwordrecovery', name: 'Password Recovery', component: PasswordRecovery },
  { path: '/emailsendpasswordrecovery', name: 'Email Send Password Recovery', component: EmailSendPasswordRecovery },
  { path: '/changepassword', name: 'Change Password', component: ChangePassword },
  { path: '/emailsendactiveaccount', name: 'Active Account', component: EmailSendActiveAccount }
];

export default routes;
