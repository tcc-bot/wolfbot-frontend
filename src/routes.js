import {
  Dashboard,
  Estatisticas,
  Configuracao,
} from './views';
import Full from './containers/Full';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Full },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/estatisticas', name: 'Estatisticas', component: Estatisticas },
  { path: '/configuracao', name: 'Configuracao', component: Configuracao },
];

export default routes;
