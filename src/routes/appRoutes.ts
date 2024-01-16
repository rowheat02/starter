import Dashboard from '@Views/Dashboard';
import Authentication from '@Views/Authentication';
// @ts-ignore
import Map from '@Views/Map';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/login',
    name: 'Login',
    component: Authentication,
    authenticated: false,
  },
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/map',
    name: 'Map ',
    component: Map,
    authenticated: false,
  },
];

export default appRoutes;
