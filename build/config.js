'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twimlAppSid: process.env.APP_SID
};

exports.default = config;