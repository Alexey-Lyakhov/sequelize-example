const config = require('./config/config')
const express = require('express')
const app = express()
const path = require('path')
const db = require('./utils/database')

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/main.html'))
})

//app.use('/', userRoutes)


async function start() {
    try {
        await db.sequelize.sync()
        app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start();
