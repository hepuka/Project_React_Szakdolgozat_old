import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const coffeeSchema = mongoose.Schema({
  name: String,
  packaging: String,
  price: Number,
  type: { type: String, default: "coffee" },
});

autoIncrement.initialize(mongoose.connection);
coffeeSchema.plugin(autoIncrement.plugin, "coffee");

const postCoffee = mongoose.model("coffee", coffeeSchema);

export default postCoffee;
