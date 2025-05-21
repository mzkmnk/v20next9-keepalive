const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/keepalive') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
    } else if (req.url === '/no-keepalive') {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Connection': 'close'
      });
      res.end('OK');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
