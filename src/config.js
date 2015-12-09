'use strict';

const config = {
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twimlAppSid: process.env.APP_SID,
  outboundNumber: process.env.OUTBOUND_NUMBER
};

export default config;
