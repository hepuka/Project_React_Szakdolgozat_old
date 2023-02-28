import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const drinkSchema = mongoose.Schema({
  name: String,
  packaging: String,
  price: Number,
  type: { type: String, default: "drink" },
});

const coffeeSchema = mongoose.Schema({
  name: String,
  packaging: String,
  price: Number,
  type: { type: String, default: "coffee" },
});

const cakeSchema = mongoose.Schema({
  name: String,
  packaging: String,
  price: Number,
  type: { type: String, default: "cake" },
});

autoIncrement.initialize(mongoose.connection);
drinkSchema.plugin(autoIncrement.plugin, "drink");
coffeeSchema.plugin(autoIncrement.plugin, "drink");
cakeSchema.plugin(autoIncrement.plugin, "drink");

export const postDrink = mongoose.model("Drink", drinkSchema, "drinks");
export const postCoffee = mongoose.model("Coffee", coffeeSchema, "drinks");
export const postCake = mongoose.model("Cake", cakeSchema, "drinks");
