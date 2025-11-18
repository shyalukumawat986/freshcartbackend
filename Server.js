
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ MongoDB Connection
mongoose
  .connect("mongodb+srv://shyalu:sQagtJSYSmhDQlHj@cluster0.q60pcqu.mongodb.net/freshcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Import Mongoose Model
const Allusers = require("./models/Users");
// (If Products model not needed now, comment it)
const Ourproducts = require("./models/Products");
const OurWishlist = require("./models/Wishlist");
const Cartitem = require("./models/Cartitem");


// ✅ Signup Route
app.post("/signup", async (req, res) => {
   let a = await Allusers.insertOne({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password

  })


  let result = await a.save();

  if(result){
    res.json({
      status:true
    })
  }
  else{
    res.json({
      status:false
    })
  }
});




// add product -------------------------

app.post("/addproduct", async (req, res) => {
  let a = await Ourproducts.insertOne({
    productimage: req.body.product.productimage,
    category: req.body.product.category,
    name: req.body.product.name,
    rating: req.body.product.rating,
    price: req.body.product.price,
    oldprice: req.body.product.oldprice,

  })


  let result = await a.save();



})


// get products 
app.get("/popularproducts", async (req, res) => {
  let myproducts = await Ourproducts.find({})

  if (myproducts) {
    res.json({
      status: true,
      popularproducts: myproducts
    })
  }
  else {
    res.json({
      status: false
    })
  }
})



// wishlist ------

app.post("/wishlistitem", async (req, res) => {
  let a = await OurWishlist.insertOne({
    productimage: req.body.wishlistitem.productimage,
    name: req.body.wishlistitem.name,
    price: req.body.wishlistitem.price,
  })

  let result = await a.save()
})

// get Wishlist
app.get("/wishlist", async (req, res) => {
  let mywishlist = await OurWishlist.find({})

  if (mywishlist) {
    res.json({
      status: true,
      wishlist: mywishlist
    })
  }
  else {
    res.json({
      status: false
    })
  }
})

// removewishlistitem ---------------
app.post("/removewishlistitem", async (req, res) => {
  await OurWishlist.findOneAndDelete({ "_id": req.body.item._id })
})





















// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});

app.get("/", (req, res) => {
  res.json({
    status: true
  })
})



