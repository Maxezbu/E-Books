const express = require("express");
const carritoController = require("../controllers/carrito");
const router = express.Router();

router.post("/:userId", carritoController.create);
router.get("/all/:userId", carritoController.findAll);
router.get("/:userId", carritoController.findOne);
module.exports = router;
