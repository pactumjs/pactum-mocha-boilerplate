const { pino } = require('pino');

let logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      destination: `logs/${Date.now()}.log`,
      colorize: false,
      translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
    },
  },
});

function setLogger(name) {
  logger = pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        destination: `logs/${name}.log`,
        colorize: false,
        translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
      },
    },
  });
}

function info() {
  logger.info(...arguments);
}

function error() {
  logger.error(...arguments);
}

module.exports = { logger: { info, error }, setLogger };