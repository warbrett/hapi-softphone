'use strict';

import indexHandler from './handlers/index';
import twimlHandler from './handlers/twiml';
import inboundTwimlHandler from './handlers/inbound-twiml';

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
  },
  {
    method: 'GET',
    path: '/inbound-twiml',
    handler: inboundTwimlHandler
  }
];

export default routes;
