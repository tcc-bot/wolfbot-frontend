import {
  Dashboard,
  Estatisticas,
  Configuracao,
  Carteira,
  Graficos,
  Backtesting,
  Historico,
  Perfil
} from './views';
import Full from './containers/Full/Full';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Full },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/carteira', name: 'Carteira', component: Carteira },
  { path: '/graficos', name: 'Graficos', component: Graficos },
  { path: '/historico', name: 'Historico', component: Historico },
  { path: '/estatisticas', name: 'Estatisticas', component: Estatisticas },
  { path: '/backtesting', name: 'Backtesting', component: Backtesting },
  { path: '/configuracao', name: 'Configuracao', component: Configuracao },
  { path: '/perfil', name: 'Perfil', component: Perfil },

]

export default routes
