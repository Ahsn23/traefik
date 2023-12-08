const http = require('http');

const host = '0.0.0.0';
const port = 80;

const authRequestListener = function (req, res) {
    try {
        console.log('Authentication successful.');

        res.setHeader('X-Emms-Token', 'your-emms-token');
        res.setHeader('X-UUID', 'your-uuid');
        res.setHeader('MMSAuth', 'your-mms-auth');
        res.setHeader('MMSAuthSig', 'your-mms-auth-sig');
        res.setHeader('MMSSession', 'your-mms-session');

        res.writeHead(200);
        res.end('Authentiction successful.');
    } catch (error) {
        console.error('Error in authentication:', error.message);
        res.writeHead(500);
        res.end('Internal Server Error');
    }
};

const server = http.createServer(authRequestListener);
server.listen(port, host, () => {
    console.log(`Auth Service is running on http://${host}:${port}`);
});
