require('../src/specs');
require('../src/utils/event.logger');

const { spec, request, stash } = require('pactum');
const { logger } = require('../src/utils/logger');

before(async function () {
  this.timeout(10000);
  logger.info({}, 'Setting up base test');
  stash.loadData('./src/data');
  stash.setDirectOverride(true);

  request.setBaseUrl('https://apichallenges.eviltester.com');

  // Create challenger id
  const id = await spec('create challenger id');
  request.setDefaultHeaders('X-CHALLENGER', id);

  // Add dummy todos
  await spec('create a todo item', { title: 'process payroll' });
  await spec('create a todo item', { title: 'train staff' });
});