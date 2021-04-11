const Review = require("../models/Review")


const ReviewController = {
    
    create(req, res) {
        console.log("POST", req.body)
        Review.create(req.body)
        .then(review => res.send(review))
        .catch(e => console.log(e))
    },
    findAll(req, res) {
        Review.find({product: req.params.productId})
        .populate({path: "user", select: ["nombre", "apellido"]})
        .then(reviews => res.send(reviews))
    }
}

module.exports = ReviewController;
