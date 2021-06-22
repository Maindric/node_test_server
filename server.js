const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Hello, Galvanize!");
})

server.listen(3000, "localhost", () => {
    console.log('Server is running at http://localhost:3000');
})