const { default: mongoose } = require("mongoose")

const wishlistSchema = new mongoose.Schema({
     productimage:String,
     name:String,
     price:String,
  


})

const  Ourwishlist= mongoose.model('wishlist', wishlistSchema);
module.exports=Ourwishlist;
  