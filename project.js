const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('this is text content.');
    } 
    else if (req.url === '/page') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body><h1>HTML page</h1></body></html>');
    }
    else if (req.url === '/file') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('file not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } 
    else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('server started on 3000 port');
});
