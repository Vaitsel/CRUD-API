const { v4: uuidv4, validate } = require('uuid');

const getOneUser = async (id,req,res,users) => {
    if (validate(id)) {
        const result = users.find((user) => user.id === id);
        if (result) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(result));
            res.end();
            return
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify('User not found'));
            res .end();
            return
        }
    } else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end('UserId not valid (not uuid)');
    }
}

module.exports = getOneUser;