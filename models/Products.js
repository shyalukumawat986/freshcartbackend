const { default: mongoose } = require("mongoose")

const productSchema = new mongoose.Schema({
    productimage:String,
    category:String,
    name:String,
    rating:String,
    price:String,
    oldprice:String,


})

const  ourproducts= mongoose.model('ourproducts', productSchema);
module.exports=ourproducts;
  