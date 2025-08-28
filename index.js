// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  // Simple API → always return JSON
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, World!' }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log ('server ,running at http://localhost:3000');
  });