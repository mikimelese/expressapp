const UsersDB = {
    users: require('../models/Users.json'),
    setUsers: function(data) { this.Users = data}
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});
    //check for duplicate username in the db
    const duplicaate = UsersDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409);
    try {

    } catch (err) {
        res.status(500).json({'message': err.message})
    }
}