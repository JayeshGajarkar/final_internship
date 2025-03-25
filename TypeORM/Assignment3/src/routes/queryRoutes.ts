import { Router } from "express";
import { queryController } from "../controllers/queryContorller";

const queryRouter = Router();

queryRouter.get("/category/:category",queryController.getProductByCategory)
queryRouter.get("/brand/:brand",queryController.getProductByBrand)
queryRouter.get("/rating/:rating",queryController.getProductByRating)
queryRouter.post("/filterPrice",queryController.getProductByPriceRange)
queryRouter.get('/sort/:sorting',queryController.sortProduct)
queryRouter.post('/filter',queryController.getProduct)


export default queryRouter;