const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user')

router.post('/user/create', userController.createUser)
router.get('/user/all', userController.getAllUsers)
router.get('/user/delete/all', userController.deleteAllUsers)
router.get('/user/:id', userController.findUserById)
router.get('/user/:id', userController.findUserById)
router.post('/user/redactor/:id', userController.changeUser)
router.get('/user/redactor/:id', (req, res) => {
    const id = req.params.id
    res.send(
        `<form action="/api/user/redactor/${id}" method="post">
        <label for="firstName">First name:</label>
        <input id="firstName" type="text" name="firstName"><br>
        <label for="lastName">Last name:</label>
        <input id="lastName" type="text" name="lastName"><br>
        <input type="submit" value="Change user"/>
        </form>`
    )
})

router.get('/user/delete/:id', userController.deleteUserById)


module.exports = router