const { default: mongoose } = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    productimage:String,
    

})

const  ourwishlist= mongoose.model('wishlist', wishlistSchema);
module.exports=ourwishlist;
