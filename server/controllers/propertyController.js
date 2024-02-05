import successHandler from "../middlewares/successHandler.js";
import Property from "../models/propertyModel.js";

export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();
    successHandler(res, 200, properties);
  } catch (error) {
    next(error);
  }
};

export const getPropertyById = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    successHandler(res, 200, property);
  } catch (error) {
    next(error);
  }
};