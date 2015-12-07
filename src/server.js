'use strict';

import Hapi from 'hapi';
import path from 'path';
import routes from './routes';
import plugins from './plugins';

const server = new Hapi.Server();
const port = process.env.PORT || 7000;
server.connection({ port });

const viewConfig = {
  engines: {
    hbs: require('handlebars')
  },
  path: path.join(__dirname, '../views'),
  layout: false
};

server.route(routes);

server.register(plugins, function (err) {
  if (err) {
    console.log(err);
  }
  server.views(viewConfig);

  server.start(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Server Running at Port ${port}`);
    }
  });
});
