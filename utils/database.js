const config = require('../config/config')
const {Sequelize} = require('sequelize')
const db = require('../models/index')
const path = require("path");

let sequelize = new Sequelize({
    dialect: config.dialect,
    database: config.database,
    storage: config.storage,
    host: config.host,
    username: config.username,
    password: config.password,
    dialectOptions: {
        multipleStatements: true
    },
    define: {
        freezeTableName: true
    },
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.forEach(function (file) {
    let model = sequelize.import(path.join(db.modelPath, file));
    db[model.name] = model;
});

// Object.keys(db).forEach(modelName => {  // TODO
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// })

db.note.belongsTo(db.user, {as: 'note-user', foreignKey: 'userid'});



module.exports = db;