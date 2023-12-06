// auth/index.js
const http = require('http');

const host = '0.0.0.0';
const port = 80;

const authRequestListener = function (req, res) {
    console.log('Authentication successful.');
    console.log('Received request:', req.method, req.url);

    res.setHeader('X-Emms-Token', 'your-emms-token');
    res.setHeader('X-UUID', 'your-uuid');
    res.setHeader('MMSAuth', 'your-mms-auth');
    res.setHeader('MMSAuthSig', 'your-mms-auth-sig');
    res.setHeader('MMSSession', 'your-mms-session');

    res.writeHead(200);
    res.end('Authentication successful.');
};

const server = http.createServer(authRequestListener);
server.listen(port, host, () => {
    console.log(`Auth Service is running on http://${host}:${port}`);
});
