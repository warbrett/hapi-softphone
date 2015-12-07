'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function twiml(request, reply) {
  console.log(request.query);
  reply('<Response>\n<Dial callerId="4144090112">' + request.query.PhoneNumber + '</Dial>\n</Response>').type('text/xml');
}

exports.default = twiml;