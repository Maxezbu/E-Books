const express = require("express");
const router = express.Router();
const productsRouter = require("./productsRouter");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");
const categoriasRouter = require("./categoriasRouter");
const shopRouter = require("./shopRouter");
const userRouter = require("./userRouter");
// const userRouter = require("./userRouter");
const carritoRouter = require("./carritoRouter");
const reviewRouter = require("./reviewRouter");

const adminRouter = require("./adminRouter");

router.use("/products", productsRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/categorias", categoriasRouter);
router.use("/shop", shopRouter);
router.use("/admin", adminRouter);
router.use("/review", reviewRouter);
router.use("/carrito", carritoRouter);

module.exports = router;
