'use strict';

function twiml (request, reply) {
  // TODO: Make this a proper template
  reply(`<Response>
<Dial callerId="${request.query.CallerId}">${request.query.PhoneNumber}</Dial>
</Response>`).type('text/xml');
}

export default twiml;
