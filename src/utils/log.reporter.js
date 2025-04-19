const { logger, setLogger } = require('./logger');
const Mocha = require('mocha');

const {
  EVENT_TEST_BEGIN,
} = Mocha.Runner.constants;

class LogReporter {
  constructor(runner) {
    runner
      .on(EVENT_TEST_BEGIN, (test) => {
        try {
          setLogger(test.title);
          logger.info({}, `Test Started - ${test.title}`);
          test.attachments = [`./logs/${test.title}.log`];
        } catch (error) {
          console.error('Error setting logger', error);
        }
      });
  }
}

module.exports = LogReporter;