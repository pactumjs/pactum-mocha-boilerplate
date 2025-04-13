const { handler } = require('pactum');

handler.addSpecHandler('create challenger id', ({ spec }) => {
  spec.post('/challenger');
  spec.expectStatus(201);
  spec.returns('res.headers.x-challenger');
});

handler.addSpecHandler('create a todo item', ({ spec, data }) => {
  spec.post('/todos');
  spec.withJson({
    "title": data.title,
    "doneStatus": false,
    "description": ""
  });
  spec.expectStatus(201);
});