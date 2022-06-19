import * as url from "url"
import {} from 'dotenv/config'
import * as http from 'http'; 
import { create } from './componnets/createUser.js';
import { getUser } from './componnets/getUser.js';
import { getOneUser } from './componnets/getOneUser.js'
import { changeUser } from './componnets/changeUser.js'
import { deleteUser } from './componnets/deleteUser.js'

let users = [];

const PORT = process.env.PORT || 3000;

const app = http.createServer();

app.on("request", (req, res) => {
  
  const urlparse = url.parse(req.url, true);
   
  switch (req.method) {
    case "GET":
      if (urlparse.pathname.split('/').length > 3 && urlparse.pathname.split('/')[3]) {
        getOneUser(urlparse.pathname.split('/')[3],req,res,users);
      } else {
        getUser(req, res, users);
      }
      break

    case "POST":
      create(req, res, users);
      users = users;
      break

    case "PUT":
      if (urlparse.pathname.split('/').length > 3 && urlparse.pathname.split('/')[3]) {
        changeUser(urlparse.pathname.split('/')[3],req,res,users);
      }

      break

    case "DELETE":
      if (urlparse.pathname.split('/').length > 3 && urlparse.pathname.split('/')[3]) {
        deleteUser(urlparse.pathname.split('/')[3],req,res,users);
      }
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
