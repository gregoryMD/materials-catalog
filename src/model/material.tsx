import { Error, Mongoose } from "mongoose";

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;

console.log("conecting to", url);

mongoose
  .connect(url)
  // eslint-disable-next-line no-unused-vars
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error: Error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const materialSchema = new mongoose.Schema({
  id: Number,
  name: String,
  volume: Number,
  deliveryDate: String,
  color: String,
  cost: Number,
});

materialSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", materialSchema);
