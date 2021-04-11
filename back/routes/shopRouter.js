const checkJWT = require("../middlewareAuthJWT/jwt")
const express = require('express');
const router = express.Router();

router.get("/", checkJWT , (req, res) => {
    res.status(200).json(req.user)
})

module.exports = router