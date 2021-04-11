const Product = require("../models/Product");

const ProductController = {
  find(req, res) {
    const { titulo } = req.params;
    Product.find({ titulo: { $regex: `.*${titulo}`, $options: "i" } })
      .populate("categoria")
      .then((product) => res.send(product))
      .catch((e) => res.send(e));
  },
  findOne(req, res) {
    Product.findById({ _id: req.params.id })
      .populate("categoria")
      .then((product) => res.send(product))
      .catch((e) => res.send(e));
  },
  findAll(req, res) {
    if (req.query.categoria) {
      Product.find({ categoria: req.query.categoria })
        .populate("categoria")
        .then((product) => res.send(product))
        .catch((e) => res.send(e));
    } else {
      Product.find()
        .populate("categoria")
        .then((products) => res.send(products))
        .catch((e) => res.send(e));
    }
  },
  // update(req, res) {
  //   console.log(req.body)
  //   Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
  //     .populate("categoria")
  //     .then((product) => res.send(product))
  //     .catch((e) => res.send(e));
  // },
};

module.exports = ProductController;
