import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const cakeSchema = mongoose.Schema({
  name: String,
  packaging: String,
  price: Number,
  type: { type: String, default: "cake" },
});

autoIncrement.initialize(mongoose.connection);
cakeSchema.plugin(autoIncrement.plugin, "cake");

const postCake = mongoose.model("cake", cakeSchema);

export default postCake;
