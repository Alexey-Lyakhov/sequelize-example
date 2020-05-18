const fs = require("fs");


let db = fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".js") !== 0) && (file !== "index.js")
    })

db.modelPath = __dirname

module.exports = db;