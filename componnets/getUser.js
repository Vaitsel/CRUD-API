const getUser = async (req, res, users) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
}

module.exports = getUser;