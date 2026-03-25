import { Router } from "express";

import authController from "./controllers/authController.js";
import furnitureController from "./controllers/furnitureController.js";

const routes = Router();

routes.use("/auth", authController);
routes.use("/furniture", furnitureController);

export default routes