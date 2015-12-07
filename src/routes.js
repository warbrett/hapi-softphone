'use strict';

import indexHandler from './handlers/index';
import twimlHandler from './handlers/twiml';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: indexHandler
  },
  {
    method: 'GET',
    path: '/twiml',
    handler: twimlHandler
  }
];

export default routes;
