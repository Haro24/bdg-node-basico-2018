const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'Hola mundo'
    }));
})

server.listen(3000);