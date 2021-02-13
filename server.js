const http = require("http");
const hostname = "127.0.0.1";
const port = 5678;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to start learning node and express\n');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})