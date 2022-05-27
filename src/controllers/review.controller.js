const Review = require("../models/review.model");

module.exports = {
  // Get- List

  list(req, res) {
    Review.find()
      .then((review) => {
        res.status(200).json({ message: "Review found", data: review });
      })
      .catch((err) => {
        res.status(404).json({ message: "Review not found" });
      });
  },

  show(req, res) {
    const { reviewId } = req.params;

    Review.findById(reviewId)
      .then((review) => {
        res.status(200).json({ message: "Review found", data: review });
      })
      .catch((err) => {
        res.status(404).json({ message: "Review dosn`t exist" });
      });
  },

  // create - Post

  create(req, res) {
    const data = req.body;
    const newReview = {
      ...data,
    };

    Review.create(newReview)
      .then((review) => {
        res.status(201).json({ message: "Create review", data: review });
      })
      .catch((err) => {
        res.status(400).json({ message: "Error create review", data: err });
      });
  },

  update(req, res) {
    const { reviewId } = req.params;

    Review.findByIdAndUpdate(reviewId, req.body, { new: true })
      .then((review) => {
        res.status(200).json({ message: "Review update", data: review });
      })
      .catch((err) => {
        res.status(404).json({ message: "Review dosn`t update" });
      });
  },

  destroy(req, res) {
    const { reviewId } = req.params;

    Review.findByIdAndDelete(reviewId)
      .then((review) => {
        res.status(200).json({ message: "review Delete", data: review });
      })
      .catch((err) => {
        res.status(404).json({ message: "review dosn`t delete" });
      });
  }
};
