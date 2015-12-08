'use strict';

function twiml (request, reply) {
  // TODO: Make this a proper template and don't hardcore caller id
  reply(`<Response>
<Dial callerId="">${request.query.PhoneNumber}</Dial>
</Response>`).type('text/xml');
}

export default twiml;
