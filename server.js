const http = require("http");

const server = http.createServer((request, reponse) => {
    Response.end("Hello, Galvanize!");
})

server.listen(3000, "127.0.0.1", () => {
    console.log('Server is running at http://127.0.0.1:3000');
})