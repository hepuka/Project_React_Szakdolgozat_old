import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const orderSchema = mongoose.Schema({
  vegosszeg: Number,
  orderid: Number,
  time: Date,
});

autoIncrement.initialize(mongoose.connection);

const postOrder = mongoose.model("order", orderSchema);

export default postOrder;
