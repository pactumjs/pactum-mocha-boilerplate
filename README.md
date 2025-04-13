# PactumJS Mocha Boilerplate

A test automation boilerplate using [PactumJS](https://pactumjs.github.io/) with Mocha for API testing.

## Overview

This project demonstrates how to use PactumJS with Mocha to create API tests with the following features:
- Reusable spec handlers
- Data templates
- Comprehensive request/response logging
- JUnit report generation

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/pactumjs/pactum-mocha-boilerplate.git
cd pactum-mocha-boilerplate
npm install
```

## Project Structure

```
├── logs/                   # Test execution logs
├── reports/                # Test execution reports
├── src/
│   ├── data/               # Test data templates
│   │   └── todo.template.json
│   ├── specs/              # Reusable PactumJS spec handlers
│   │   └── index.js
│   └── utils/              # Utility functions
│       ├── event.logger.js # PactumJS event logger
│       └── logger.js       # Pino logger configuration
├── tests/                  # Test files
│   ├── base.test.js        # Base test setup
│   └── challenges.test.js  # API test examples
└── package.json            # Project dependencies and scripts
```

## Running Tests

Execute all tests:

```bash
npm test
```

## Test Reports

After test execution, reports are generated in the following formats:
- JUnit XML reports in the `reports/` directory
- Detailed logs for each test in the `logs/` directory

## Features

### Reusable Spec Handlers

PactumJS spec handlers are defined in `src/specs/index.js` to promote code reuse across tests.

### Data Templates

Test data templates are stored in `src/data/` directory and loaded using PactumJS stash.

### Comprehensive Logging

- Each test generates its own log file
- All HTTP requests and responses are automatically logged
- Logs include detailed request/response information including headers, body, and timing

## Example Test

```javascript
it('create a todo', async function () {
  await spec()
    .post('/todos')
    .withJson({
      "@DATA:TEMPLATE@": "CREATE_TODO_PAYLOAD"
    })
    .expectStatus(201);
});
```

## License

MIT License