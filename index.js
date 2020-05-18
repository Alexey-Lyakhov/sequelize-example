const config = require('./config/config')
const Router = require('express')
const router = Router()
const express = require('express')
const app = express()
const path = require('path')
const db = require('./utils/database')
 const userRoutes = require('./api/routes/user')



app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/main.html'))
})

app.use('/api', userRoutes)






async function start() {
    try {
        await db.sequelize.sync()
        app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


start();
