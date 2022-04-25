////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config()

const express = require("express") //web server framework
const mongoose = require("./models/connection") // Object Document Manager (Work with DB)
const methodOverride = require("method-override") // override request methods
const morgan = require("morgan") // used for logging requests to my server
const ProductRouter = require("./controllers/ProductController")

// Creat Express Application
const app = express();
const PORT = process.env.PORT;

//////////////////////
// Declare Middleware
//////////////////////
app.use(express.urlencoded({extended: true})) // parse html form bodies into req.body
app.use("/static", express.static("static")) // serve files statically
app.use(methodOverride("_method")) // override request methods for form sumissions
app.use(morgan("dev")) // log every request
app.use(ProductRouter)
///////////////////////
// Declare Routes and Routers 
///////////////////////

///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => console.log`Listening on port ${PORT}`);