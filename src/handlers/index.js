'use strict';

import twilio from 'twilio';
import config from '../config';

const client = new twilio.RestClient(config.twilioAccountSid, config.twilioAuthToken);
const capability = new twilio.Capability(config.twilioAccountSid, config.twilioAuthToken);

capability.allowClientOutgoing(config.twimlAppSid);

function handler (request, reply) {
  const token = capability.generate();
  const context = { token };

  client.accounts.incomingPhoneNumbers.list()
  .then(function ({ incomingPhoneNumbers }) {
    context.numbers = incomingPhoneNumbers.map(({ friendlyName, phoneNumber }) => {
      return { friendlyName, phoneNumber };
    });
  })
  .finally(function () {
    reply.view('index', context);
  });
}

export default handler;
