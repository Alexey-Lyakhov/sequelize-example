const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user')

router.post('/user/create', userController.createUser)


module.exports = router