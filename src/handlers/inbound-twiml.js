'use strict';

function twiml (request, reply) {
  // TODO: Make this a proper template
  // TODO: how to dynamically handle app to call?
  reply(`<Response>
<Client>${request.query.client}</Client>
</Response>`).type('text/xml');
}

export default twiml;
