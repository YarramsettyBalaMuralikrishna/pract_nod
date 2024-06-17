const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('this is our home page');
  } else if (req.url === '/about') {
    res.end('this is our about welceome page');
  } else {
    res.end(`
      <h1>you hasve etered wrog page</h1>
      <a href="/">Home</a>
      `);
  }
});
server.listen(5000);
