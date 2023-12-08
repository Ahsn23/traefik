const http = require('http');

const host = '0.0.0.0';
const port = 80;
const expectedToken = 'badami'; 

const authRequestListener = function (req, res) {
    try {
        if (!req.headers.authorization) {
            console.log('Authentication failed: Token missing.');
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            return res.end('Unauthorized: Token missing.');
        }

        const token = req.headers.authorization.split(' ')[1];

        if (token !== expectedToken) {
            console.log('Authentication failed: Invalid token.');
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            return res.end('Unauthorized: Invalid token.');
        }

        console.log('Authentication successful.');
        res.end('Authentication successful.');
    } catch (error) {
        console.error('Error in authentication:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
};

const server = http.createServer(authRequestListener);
server.listen(port, host, () => {
    console.log(`Auth Service is running on http://${host}:${port}`);
});
