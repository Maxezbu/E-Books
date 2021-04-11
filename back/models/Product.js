const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default:
      "https://4.bp.blogspot.com/-p3WLzI73jiU/W3F9nOfRZdI/AAAAAAAABOU/6Umu0QlXe4UZCnvE_MR2_8tJh2NWZ1jPwCLcBGAs/s1600/libro.png",
  },
  num_paginas: {
    type: Number,
  },
  edicion: {
    type: Number,
  },
  editorial: {
    type: String,
    required: true,
  },
  reseqna: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
  },
  // review: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Review",
  // },
  stock: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
