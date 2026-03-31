import { Router } from "express";

import authController from "./controllers/authController.js";
import productController from "./controllers/productController.js";
import reviewController from "./controllers/reviewController.js";

const routes = Router();

routes.use("/auth", authController);
routes.use("/products", productController);
routes.use("/reivews", reviewController);

export default routes