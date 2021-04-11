const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/users", adminController.findUsers);
router.delete("/users/:id", adminController.deleteUser);
router.put("/users/:id", adminController.update);
router.put("/users/update/:id", adminController.changeAdmin);

router.post("/categorias", adminController.createCategories);
router.delete("/categorias/:id", adminController.deleteCategoria);
router.get("/categoria/:id", adminController.getCategoria);
router.post("/categoria/edit/:id", adminController.updateCategoria);

router.delete("/products/:id", adminController.deleteProduct);
router.post("/products/edit/:id", adminController.updateBook);
router.post("/products/create", adminController.createBook);
module.exports = router;
