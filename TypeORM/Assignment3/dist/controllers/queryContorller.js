"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryController = void 0;
const productServices_1 = require("../services/productServices");
class queryController {
    static getProductByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = req.params.category;
                const result = yield productServices_1.productServices.getProductByCategory(category);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    static getProductByBrand(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const brand = req.params.brand;
                const result = yield productServices_1.productServices.getProductByBrand(brand);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    static getProductByPriceRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { lowerLimit, upperLimit } = req.body;
                const result = yield productServices_1.productServices.getProductByPriceRange(lowerLimit, upperLimit);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    static getProductByRating(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rating = parseInt(req.params.rating);
                const result = yield productServices_1.productServices.getProductByRating(rating);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    static sortProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sorting = req.params.sorting;
                const result = yield productServices_1.productServices.sortProducts(sorting);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    static getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filters = req.body;
                const result = yield productServices_1.productServices.getProducts(filters);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
exports.queryController = queryController;
