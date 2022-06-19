import * as url from "url"
import {} from 'dotenv/config'
import * as http from 'http'; 
import { create } from './componnets/createUser.js';

let users = [];

const PORT = process.env.PORT || 3000;

const app = http.createServer();

app.on("request", (req, res) => {
  
  const urlparse = url.parse(req.url, true);
   
  switch (req.method) {
    case "GET":

      if (urlparse.pathname == ('/api/users/')) {

      } else {
        if (urlparse.pathname == '/api/users') {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(users));
        } else {

        }
      }
  
      break

    case "POST":
      create(req, res, users);
      users = users;

      break

    case "PUT":

      break

    case "DELETE":

      break

    default:
      response.statusCode = 404;
      response.write("NOT FOUND");
      response.end();
  }; 
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
