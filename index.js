const config = require('./config/config')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: config.dialect,
    database: config.database,
    storage: config.storage,
    host: config.host,
    username: config.username,
    password: config.password,
    dialectOptions: {
        multipleStatements: true
    },
});

sequelize.sync();
console.log('start')
