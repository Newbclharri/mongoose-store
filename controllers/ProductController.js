///////////////
// Dependencies
//////////////
const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router()
const Product = require("../models/Product")
const Reviews = require("../models/Reviews")

//////////
// Routes
//////////
router.get("/products/seed", async (req, res) =>{
    await Product.deleteMany({}).catch((err) => res.send(err))
    await Product.create([
        {
            name: "Beans",
            description:
              "A small pile of beans. Buy more beans for a big pile of beans.",
            img: "https://imgur.com/LEHS8h3.png",
            price: 5,
            qty: 99,
          },
          {
            name: "Bones",
            description: "It's just a bag of bones.",
            img: "https://imgur.com/dalOqwk.png",
            price: 25,
            qty: 0,
          },
          {
            name: "Bins",
            description: "A stack of colorful bins for your beans and bones.",
            img: "https://imgur.com/ptWDPO1.png",
            price: 7000,
            qty: 1,
          },
    ]).catch((err)=> res.send(err))

    //send Products as json
    res.redirect("/")
});

//index
router.get("/", async (req, res) => {
    const products = await Product.find({}).catch((err) => res.send(err))

    // res.json(products)
    res.render("index.ejs", {products: products})
})
//reviews
router.get("/reviews/:id", async (req, res) =>{
    console.log(req.body)
    res.render("reviews.ejs",{item: req.params.id})
})
router.post("/reviews/:id", async (req, res) => {
    req.body.item = req.params.id
    await Reviews.create(req.body).catch(err => res.send(err))
    // const reviews = await Reviews.find({})
    // res.json(reviews)
    res.redirect(`/${req.body.item}`)
})
//show
router.get("/:id", async (req, res) =>{
    const product = await Product.findById(req.params.id).catch((err )=> res.send(err))
    const query = {item: req.params.id}
    const reviews = await Reviews.find(query).catch(err => res.send(err))
    res.render("show.ejs", {product: product, reviews: reviews})
})

module.exports = router