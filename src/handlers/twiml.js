'use strict';

import { outboundNumber } from '../config';

function twiml (request, reply) {
  // TODO: Make this a proper template
  // TODO: Get caller id from front end
  reply(`<Response>
<Dial callerId="${outboundNumber}">${request.query.PhoneNumber}</Dial>
</Response>`).type('text/xml');
}

export default twiml;
