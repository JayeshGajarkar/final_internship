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
exports.productServices = void 0;
const QueryBuider_1 = require("../repositories/QueryBuider");
class productServices {
    static getProductByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield QueryBuider_1.productRepository.createQueryBuilder("product")
                .where("product.category= :name", { name: category })
                .getMany();
        });
    }
    static getProductByBrand(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield QueryBuider_1.productRepository.createQueryBuilder("product")
                .where("product.brand= :name", { name: brand })
                .getMany();
        });
    }
    static getProductByPriceRange(lowerLimit, upperLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield QueryBuider_1.productRepository.createQueryBuilder('product')
                .where("product.price >=:lowerLimit AND product.price <=:upperLimit", { lowerLimit: lowerLimit, upperLimit: upperLimit })
                .getMany();
        });
    }
    static getProductByRating(rating) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield QueryBuider_1.productRepository.createQueryBuilder('product')
                .where("product.rating >=:rating", { rating: rating })
                .getMany();
        });
    }
    static sortProducts(sorting) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sorting === "low-high") {
                return yield QueryBuider_1.productRepository.createQueryBuilder('product')
                    .orderBy('product.price', 'ASC')
                    .getMany();
            }
            else if (sorting === "high-low") {
                return yield QueryBuider_1.productRepository.createQueryBuilder('product')
                    .orderBy('product.price', 'DESC')
                    .getMany();
            }
            else {
                throw new Error('Invalid sorting option');
            }
        });
    }
    static getProducts(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = QueryBuider_1.productRepository.createQueryBuilder('product');
            if (filters.category) {
                query = query.andWhere('product.category = :category', { category: filters.category });
            }
            if (filters.brand) {
                query = query.andWhere('product.brand = :brand', { brand: filters.brand });
            }
            if (filters.lowerLimit !== undefined && filters.upperLimit !== undefined) {
                query = query.andWhere('product.price >= :lowerLimit AND product.price <= :upperLimit', { lowerLimit: filters.lowerLimit, upperLimit: filters.upperLimit });
            }
            if (filters.rating !== undefined) {
                query = query.andWhere('product.rating >= :rating', { rating: filters.rating });
            }
            if (filters.sorting) {
                if (filters.sorting === "low-high") {
                    query = query.orderBy('product.price', 'ASC');
                }
                else if (filters.sorting === "high-low") {
                    query = query.orderBy('product.price', 'DESC');
                }
            }
            return yield query.getMany();
        });
    }
}
exports.productServices = productServices;
