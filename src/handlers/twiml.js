'use strict';

function twiml (request, reply) {
  reply(`<Response>
<Dial callerId="4144090112">${request.query.PhoneNumber}</Dial>
</Response>`).type('text/xml');
}

export default twiml;
