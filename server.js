const server = require('./app');

const port = process.env.DATABASE_URL || 3000;


server.listen(port, ()=> console.log(`Listening on port ${port}`))
