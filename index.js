const jsonServer = require("json-server"); //importing jsonC server
const server = jsonServer.create(); //creating server
const router = jsonServer.router("db.json"); //creating router
const middlewares = jsonServer.defaults(); //creating middlewares
const port = process.env.PORT || 8080; //creating port

server.use(middlewares); //using middlewares
server.use(router); //using router

server.listen(port); //listening to port
