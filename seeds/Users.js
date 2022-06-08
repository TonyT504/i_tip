const { User } = require('../models');

const UserSeeds = [
    {
        username: "MiaLaFleur",
        email: "miajl@blahblah.com",
        password: "Password1234"
    }
];

const seedUsers = () => User.bulkCreate(UserSeeds);

module.exports = seedUsers;
