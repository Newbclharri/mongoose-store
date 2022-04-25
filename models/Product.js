/////////////////
// Dependencies
////////////////
const mongoose = require("./connection")

//////////////////////
// Schemas and Models
//////////////////////
// Schema - the definition of our data type
// Model - the object for working with our data type
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const Product = mongoose.model("Product", productSchema)

///////////////
// Export the Model
//////////////
module.exports = Product