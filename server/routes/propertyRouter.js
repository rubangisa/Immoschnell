import express from "express";

import {
  getAllProperties,
  getPropertyById,
} from "../controllers/propertyController.js";


const router = express.Router();

router.route("/").get(getAllProperties);

router.route("/:id").get(getPropertyById);

export default router;