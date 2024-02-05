import mongoose from "mongoose";
import data from "./properties.js";
import Property from "../models/propertyModel.js";
import "dotenv/config";

(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    const properties = data.map((item) => new Property(item));

    await Property.deleteMany();
    console.log("Data Deleted successfuly");

    await Property.insertMany(properties);
    console.log("Data seeded successfuly");
  } catch (error) {
    console.log(`Error while seeding data: ${error}`);
  } finally {
    mongoose.connection.close();
  }
})();