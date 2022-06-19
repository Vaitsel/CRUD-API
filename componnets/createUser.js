const { v4: uuidv4, validate } = require('uuid');

const create = async (req, res, users) => {
    req.on('data', data => {
        try {
            const jsondata = JSON.parse(data);
            const { username , age, hobbies } = jsondata;

            if (username  === undefined || typeof username !== "string" || age === undefined || typeof age !== "number" || hobbies === undefined || !Array.isArray(hobbies)) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.write(JSON.stringify('Does not contain required fields for user.'));
                res.end();
                return
            }

            const id = uuidv4();

            const user = {
                id,
                username,
                age,
                hobbies
            };
    
            users.push(user);
    
            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(user));
            res.end();
            return        
        } catch (error) {
            throw new Error();    
        }
    })
};

module.exports = create;