import { api, authenticated } from '.';

// eslint-disable-next-line import/prefer-default-export
export const dashboarddata = (data: any) =>
  authenticated(api).post('/dashboarddata/', data);
