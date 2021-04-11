const Carrito = require("../models/Carrito");

const carritoController = {
  create(req, res) {
    const { userId } = req.params;
    const { productos } = req.body;
    console.log("!!!!!!!!!!!", req.body);
    console.log("productos", productos);
    console.log("userId", userId);

    Carrito.findOne(
      { user: userId }
      /* {$addToSet:{productos: {producto:productos} }} */
    ).populate({ path: "productos", populate: { path: "producto" } }) -
      then((carrito) => {
        console.log(carrito);
        if (carrito) {
          carrito.productos = [...carrito.productos, ...productos];
          carrito.save().then((carrito) => res.send(carrito));
          // .then ((carrito)=> carrito.populate({path:"productos", populate:{path:"producto"}}).execPopulate())
        } else {
          Carrito.create({
            productos: productos ? productos : [],
            user: userId,
          }).then((carrito) => {
            res.send(carrito);
          });
        }
      });

    /* else {
      console.log("devolviendo carrito")
      if (typeof req.body.carrito == "string") {
        Carrito.find({ user: req.body.carrito })
          .then((carrito) => {
            if (carrito.length === 0) {
              return Carrito.create({ user: req.body.carrito }).then(
                (carrito) => {
                  res.send(carrito);
                }
              );
            }
            res.send(carrito[0].producto);
          })
          .catch((e) => console.log(e));
      }
    } */

    /* if (Array.isArray(req.body.carrito)) {
     
      console.log(req.body.carrito);
      const { carrito } = req.body;
      Carrito.create({ producto: carrito }).then((carrito) =>
        res.send(carrito)
      );
    } */
  },

  findAll(req, res) {
    Carrito.find()
      .populate("producto")
      .populate("user")
      .then((carrito) => res.send(carrito));
  },

  findOne(req, res) {
    Carrito.findOne({ user: req.params.userId })
      .populate({ path: "productos", populate: { path: "producto" } })
      .then((carrito) => res.send(carrito));
  },
};

module.exports = carritoController;
