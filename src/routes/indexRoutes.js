import { Router } from "express";
import cartsRouter from "./cartRoutes/CartRoutes.js";
import productsRouter from "./ProductRoutes/ProductRoutes.js";
const router = Router();

router.use("/api/productos", productsRouter);
router.use("/api/carrito", cartsRouter);

export default router;