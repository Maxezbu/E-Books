const Categoria = require("../models/Categorias");

const categoriaController = {
  findAll(req, res) {
    Categoria.find().then((categorias) => res.send(categorias));
  },
};

module.exports = categoriaController;
