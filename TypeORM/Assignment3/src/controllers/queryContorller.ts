import { Request, Response } from "express";
import { productServices } from "../services/productServices";
export class queryController {

    static async getProductByCategory(req: Request, res: Response) {
        try {
            const category = req.params.category;
            const result = await productServices.getProductByCategory(category);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async getProductByBrand(req: Request, res: Response) {
        try {
            const brand = req.params.brand;
            const result = await productServices.getProductByBrand(brand);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async getProductByPriceRange(req: Request, res: Response) {
        try {
            const {lowerLimit,upperLimit} = req.body;
            const result = await productServices.getProductByPriceRange(lowerLimit,upperLimit);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error);
        }
    }


    static async getProductByRating(req: Request, res: Response) {
        try {
            const rating = parseInt(req.params.rating);
            const result = await productServices.getProductByRating(rating);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error);
        }
    }


    static async sortProduct(req:Request,res:Response){
        try {
            const sorting = req.params.sorting;
            const result = await productServices.sortProducts(sorting);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error);
        }
    }


    static async getProduct(req:Request,res:Response){
        try{
            const filters=req.body
            const result=await productServices.getProducts(filters);
            res.status(200).json(result);
        }catch(error){
            res.status(400).json(error);
        }
    }


    

    
}