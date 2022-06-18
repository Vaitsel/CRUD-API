const http = require("http");
const url = require('url');
require('dotenv').config();

let users = [{"user" : 123}];

const PORT = process.env.PORT || 3000;

const app = http.createServer();

app.on("request", (req, res) => {
  
  const urlparse = url.parse(req.url, true);
  
  if(urlparse.pathname == '/api/users' && req.method == 'GET')
  {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  }
  
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
