'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./handlers/index');

var _index2 = _interopRequireDefault(_index);

var _twiml = require('./handlers/twiml');

var _twiml2 = _interopRequireDefault(_twiml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  method: 'GET',
  path: '/',
  handler: _index2.default
}, {
  method: 'GET',
  path: '/twiml',
  handler: _twiml2.default
}];

exports.default = routes;