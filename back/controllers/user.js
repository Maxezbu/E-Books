const User = require("../models/User");

const UserController = {
    find(req, res){
        User.find()
        .then(users => res.send(users).status(200))
        .catch(e => res.send(e).status(400))
    },
    put(req, res){
        User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(user => res.send(user).status(200))
        .catch( e => res.send(e).status(500))
    },
    delete(req, res){
        User.deleteOne({_id: req.params.id})
        .then(() => res.send(200))
        .catch(e => res.send(e))
    }
}

module.exports = UserController;

//DEBERÍAMOS BORRAR ESTE CONTROLLER