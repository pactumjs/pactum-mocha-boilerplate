const { spec } = require('pactum');
const { logger, setLogger } = require('../src/utils/logger');

describe('First Real Challenge', () => {

  beforeEach(function () {
    setLogger(this.test.ctx.currentTest.title);
    logger.info({}, `Test Started - ${this.test.ctx.currentTest.title}`);
    this.test.ctx.currentTest.attachments = [ `/logs/${this.test.title}.log`];
  });

  it('get all challenges', async function () {
    await spec()
      .get('/challenges')
      .expectStatus(200)
      .expectJsonLike({
        "challenges": [
          {
            "id": 1,
            "name": "POST /challenger (201)",
            "status": true
          }
        ]
      });
  });

});

describe('Creation Challenges with POST', () => {

  beforeEach(function () {
    setLogger(this.test.ctx.currentTest.title);
    logger.info({}, `Test Started - ${this.test.ctx.currentTest.title}`);
    this.test.ctx.currentTest.attachments = [ `/logs/${this.test.title}.log`];
  });

  it('create a todo', async function () {
    await spec()
      .post('/todos')
      .withJson({
        "@DATA:TEMPLATE@": "CREATE_TODO_PAYLOAD"
      })
      .expectStatus(201);
  });

  it('create a todo with invalid doneStatus', async function () {
    await spec()
      .post('/todos')
      .withJson({
        "@DATA:TEMPLATE@": "CREATE_TODO_PAYLOAD",
        "doneStatus": "completed"
      })
      .expectStatus(400)
      .expectJson({
        "errorMessages": [
          "Failed Validation: doneStatus should be BOOLEAN"
        ]
      });
  });

});
