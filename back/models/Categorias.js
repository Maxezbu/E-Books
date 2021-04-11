const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    default: "6057c714e774a18505f89d9c",
  },
});

const Categoria = mongoose.model("Categoria", schema);

module.exports = Categoria;
