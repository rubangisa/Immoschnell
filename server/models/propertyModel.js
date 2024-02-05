import { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title: String,
    description: String,
    price: Number,
});

export default model("Property", propertySchema);