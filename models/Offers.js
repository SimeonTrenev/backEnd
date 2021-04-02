const mongoose = require("mongoose");
const { Schema } = mongoose;

const offerSchema = new Schema({
  number: String,
  area: String,
  description: String,
  phoneNumber: String,
  phoneNumber2: String,
  phoneNumber3: String,
  price: String,
  owner: String,
  address: String,
  info: String,
  floor: Number,
  construction: String,
  property: String,
  state: String,
  neighborhood: String,
});

mongoose.model("offers", offerSchema);
