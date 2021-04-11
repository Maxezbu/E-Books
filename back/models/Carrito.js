const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      cantidad: {
        type: Number,
        default: 1,
      },
    },
  
  ],
});

const Carrito = mongoose.model("Carrito", schema);

module.exports = Carrito;
