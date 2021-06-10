const { User } = require('../models');

const userData = [{
        username: 'Jesse',
        password: '12345'
    },
    {
        username: 'Francis',
        password: '12345'
    },
    {
        username: 'JefferyD',
        password: '12345'
    },
    {
        username: 'RecklessRalph',
        password: '12345'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;