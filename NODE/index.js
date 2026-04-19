const http = require("http");
const server = http.createServer((request, response) => {
  response.write("Hello World");
  response.end();
});
server.listenerCount(3000);
