import { Router } from "express";
import routerProduct from "./product.js";

const router = Router();

// Thêm các route vào đây
router.use("/product", routerProduct);


export default router;
