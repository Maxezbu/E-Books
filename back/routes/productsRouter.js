const express = require("express");
const ProductController = require("../controllers/products");
const router = express.Router();
const ProductsController = require("../controllers/products");

router.get("/", ProductsController.findAll);
router.get("/:id", ProductsController.findOne);
//router.put("/:id", ProductController.update);
/* router.post("/", ProductsController.create); */
router.get("/search/:titulo", ProductController.find);

module.exports = router;
