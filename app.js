const http = require("http");
const url = require("url"); 
require('dotenv').config();
const create = require('./componnets/createUser');
const getUser = require('./componnets/getUser');
const getOneUser = require('./componnets/getOneUser');
const changeUser = require('./componnets/changeUser');
const deleteUser = require('./componnets/deleteUser');

let users = [];

const PORT = process.env.PORT || 3000;

const app = http.createServer();

app.on("request", (req, res) => {
  
  const urlparse = url.parse(req.url, true);
  if (urlparse.pathname.indexOf('/api/users/') >= 0) {
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
        res.statusCode = 404;
        res.write("Page not found");
        res.end();
    }; 
  } else {
    res.statusCode = 404;
    res.write("Page not found"  );
    res.end();
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
