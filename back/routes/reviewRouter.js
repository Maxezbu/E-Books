const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review')

router.post("/", reviewController.create)
router.get("/:productId", reviewController.findAll)

module.exports = router
