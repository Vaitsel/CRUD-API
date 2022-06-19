import { validate } from 'uuid';

export const deleteUser = async (id,req,res,users) => {
    if (validate(id)) {
        const result = users.find((user) => user.id === id);
        if (result) {
            users.forEach((user,index) => {
                if (user.id === id) {
                    users.splice(index,1)
                }
            });
            res.statusCode = 204;
            res.setHeader("Content-Type", "application/json");
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