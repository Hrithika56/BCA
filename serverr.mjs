import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    console.log('Received request...', req.url, req.method);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url === '/') {
        if (req.method === 'POST') {
            let data = '';
            req.on('data', chunk => {
                data += chunk.toString();
            });

            req.on('end', () => {
                const { username, password } = JSON.parse(data);
                console.log('Received signup request for:', username, password);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Pratik' }));
            });
        } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});