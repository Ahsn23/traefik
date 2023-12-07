// index.js
const http = require('http');
const url = require('url');

const host = '0.0.0.0';
const port = 80;

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const query = url.parse(req.url, true).query;
    res.write(req.url + '\n');
    res.write(JSON.stringify(query));
    res.write('\n');
    res.end('{"server":"api3x", "message": "This is a JSON response"}');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Main Server API3x is running on http://${host}:${port}`);
});
