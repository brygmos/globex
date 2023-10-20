const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-cors'), {});
fastify.get('/', async (request, reply) => {
	const absolutePath = path.resolve(__dirname, './users.json');
	fs.readFile(absolutePath, 'utf8', (err, data) => {
		if (err) {
			console.log('File read failed:', err);
			return;
		}

		if(request.query.term)
		{
			const result = JSON.parse(data).filter((elem)=> elem.name.toLowerCase().search(request.query.term.toLowerCase()) !== -1);
			reply.send(JSON.stringify(result));
		}
		else
		{
			reply.send(data);
		}

	})
});

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
