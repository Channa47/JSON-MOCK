const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require('dotenv').config();
const port =  process.env.port || 8080; 
server.use(middlewares);
server.use(router);

server.listen(port);