'use strict';

import twilio from 'twilio';
import config from '../config';

const capability = new twilio.Capability(config.twilioAccountSid, config.twilioAuthToken);
capability.allowClientOutgoing(config.twimlAppSid);

function handler (request, reply) {
  const token = capability.generate();
  const context = {
    token
  };

  reply.view('index', context);
}

export default handler;
