import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  quantity: { type: Number, default: 1 },
});

export default mongoose.model("CartItem", cartItemSchema);
