
const db = require('../../utils/database')


module.exports.findUserById = async (req, res) => {
    try {
    const user = await db.user.findOne({
        where: {id: req.params.id}
    })
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}

module.exports.deleteUserById = async (req, res) => {
    try {
        let id = req.params.id

        await db.user.destroy(({where: {id: id}}))
        res.status(204).redirect('/')
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}

module.exports.createUser = async (req, res) => {
    const user = new db.user({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    try {
        await user.save()
        res.status(201).redirect('/') //201 - element has been created

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await db.user.findAll({attributes: ['id', 'firstName', 'lastName']})
        res.status(200).json(users)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}

module.exports.deleteAllUsers = async (req, res) => {
    try {
        await db.user.destroy({where: {}})
        res.status(200).redirect('/')
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}

module.exports.changeUser = async (req, res) => {
    try {
        let user = await db.user.findOne({
            where: {id: req.params.id}
        })
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        await user.save()
        res.status(200).redirect('/')
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}