const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginController = {
    find(req, res){
        User.findOne({email : req.body.email})
        .then( async (user) => {
            if(!user) {
                return res.status(400).send("usuario no existente")
            }

            const valid = await user.validPassword(req.body.password)

            if(!valid) {
                return res.status(401).send("invalid credentials")
            }

            const token = jwt.sign({ _id: user._id }, "ebook")
            return res.status(200).json({ token, user })

        })
    }
}

module.exports = loginController