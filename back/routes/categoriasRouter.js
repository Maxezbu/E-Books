const express = require("express");
const categoriaController = require("../controllers/categorias");
const router = express.Router();

router.get("/", categoriaController.findAll);

module.exports = router;
