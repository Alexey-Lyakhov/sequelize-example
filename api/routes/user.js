const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user')

router.post('/user/create', userController.createUser)
router.get('/user/all', userController.getAllUsers)
router.get('/user/delete/all', userController.deleteAllUsers)



module.exports = router