'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();
var port = process.env.PORT || 7000;
server.connection({ port: port });

var viewConfig = {
  engines: {
    hbs: require('handlebars')
  },
  path: _path2.default.join(__dirname, '../views'),
  layout: false
};

server.route(_routes2.default);

server.register(_plugins2.default, function (err) {
  if (err) {
    console.log(err);
  }
  server.views(viewConfig);

  server.start(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Server Running at Port ' + port);
    }
  });
});