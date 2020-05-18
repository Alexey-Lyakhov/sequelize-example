
const db = require('../../utils/database')


module.exports.findUserById = async (req, res) => {

}

module.exports.createUser = async (req, res) => {
    const user = new db.user({

        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    try {
        await user.save()
        res.status(201).json({user}) //201 - element has been created
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
}