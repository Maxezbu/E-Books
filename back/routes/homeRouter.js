const express = require("express");
const checkJWT = require("");
const router = express.Router();

router.get("/", checkJWT, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
