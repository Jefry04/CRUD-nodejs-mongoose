const { Schema, model } = require("mongoose");

const titleRegex = new RegExp("[a-zA-Z]+") //Just letters 
const commentRegex = new RegExp("[a-z][0-9]+") //Just letters 
const reviewSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      maxlength: [20, "maximo de 20 caracteres"],
      match: [titleRegex, "No debe contener numeros"],
    },
    comment: {
        required: true,
        type: String,
        maxlength: [50, "maximo de 50 caracteres"],
        match: [titleRegex, "No debe contener numeros"],
    },
    score:  {
        required: true,
        type: Number,
        min: [1, "debe ser minimo 1"],
        max: [5, "Debe ser maximo 5"],

    },
  },
  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
