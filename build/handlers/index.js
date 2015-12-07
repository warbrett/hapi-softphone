'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twilio = require('twilio');

var _twilio2 = _interopRequireDefault(_twilio);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capability = new _twilio2.default.Capability(_config2.default.twilioAccountSid, _config2.default.twilioAuthToken);
capability.allowClientOutgoing(_config2.default.twimlAppSid);

function handler(request, reply) {
  var token = capability.generate();
  var context = {
    token: token
  };

  reply.view('index', context);
}

exports.default = handler;