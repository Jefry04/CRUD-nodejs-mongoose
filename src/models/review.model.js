const {Schema, model} = require ("mongoose");

const  reviewSchema = new Schema (
    {
     title:String,
     comment:String,
     score:Number,
    },
    {
        timestamps:true,
    }
)

const Review = model("Review",reviewSchema );

module.exports = Review;