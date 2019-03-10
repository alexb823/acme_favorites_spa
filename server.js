const server = require('./app');
const { syncAndSeed } = require('./db/index');

const port = process.env.PORT || 3000;

syncAndSeed().then(() =>
  server.listen(port, () => console.log(`Listening on port ${port}`))
);
