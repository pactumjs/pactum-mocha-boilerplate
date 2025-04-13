const { events } = require('pactum');
const { logger } = require('./logger');

const { pactumEvents, EVENT_TYPES } = events;

pactumEvents.on(EVENT_TYPES.AFTER_RESPONSE, ({ request, response }) => {
  logger.info({
    request: {
      method: request.method,
      url: request.url,
      headers: request.headers,
      body: request.body,
    },
    response: {
      statusCode: response.statusCode,
      responseTime: response.responseTime,
      headers: response.headers,
      body: response.body,
    }
  }, `Request: ${request.method} ${request.path}`);
});