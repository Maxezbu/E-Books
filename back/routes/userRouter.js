const express = require('express');
const checkJWT = require("../middlewareAuthJWT/jwt")
const router = express.Router();
const userController = require('../controllers/user')

router.get("/", userController.find)
router.put("/profile/:id", userController.put)

module.exports = router


//DEBERIAMOS BORRAR ESTE ROUTER