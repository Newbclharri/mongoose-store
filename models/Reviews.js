/////////////////
// Dependencies
////////////////
const mongoose = require("./connection")

//////////////////////
// Schemas and Models
//////////////////////
// Schema - the definition of our data type
// Model - the object for working with our data type
const reviewSchema = new mongoose.Schema({
    item: String,
    text: String,
})

const Reviews = mongoose.model("Reviews", reviewSchema)

///////////////
// Export the Model
//////////////
module.exports = Reviews