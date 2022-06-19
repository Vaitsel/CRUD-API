const { v4: uuidv4, validate } = require('uuid');

const changeUser = async (id,req,res,users) => {
    req.on('data', data => {
        try {        
            if (validate(id)) {
                const result = users.find((user) => user.id === id);
                if (result) {
                    const jsondata = JSON.parse(data);
                    const { username , age, hobbies } = jsondata;

                    users.forEach((user) => {
                        if (user.id === id) {
                            user.username = username;
                            user.age = age;
                            user.hobbies = hobbies;
                        }
                    });

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
        } catch (error) {
            throw new Error();    
        }
    })
}

module.exports = changeUser;