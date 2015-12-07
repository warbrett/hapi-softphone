'use strict';

function twiml (request, reply) {
  reply(`<Response>
<Dial callerId="">${request.query.PhoneNumber}</Dial>
</Response>`).type('text/xml');
}

export default twiml;
