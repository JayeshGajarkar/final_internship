import { productRepository } from "../repositories/QueryBuider";


export class productServices {
    static async getProductByCategory(category: string) {
        return await productRepository.createQueryBuilder("product")
        .where("product.category= :name", { name: category })
        .getMany();
    }

    static async getProductByBrand(brand: string) {
        return await productRepository.createQueryBuilder("product")
        .where("product.brand= :name", { name: brand })
        .getMany();
    }

    static async getProductByPriceRange(lowerLimit:number,upperLimit:number){
        return await productRepository.createQueryBuilder('product')
        .where("product.price >=:lowerLimit AND product.price <=:upperLimit",{lowerLimit:lowerLimit,upperLimit:upperLimit})
        .getMany();
    }


    static async getProductByRating(rating:number){
        return await productRepository.createQueryBuilder('product')
        .where("product.rating >=:rating",{rating:rating})
        .getMany();
    }


    static async sortProducts(sorting: string) {
        if (sorting === "low-high") {
            return await productRepository.createQueryBuilder('product')
                .orderBy('product.price', 'ASC')
                .getMany();
        } else if (sorting === "high-low") {
            return await productRepository.createQueryBuilder('product')
                .orderBy('product.price', 'DESC')
                .getMany();
        } else {
            throw new Error('Invalid sorting option');
        }
    }


    static async getProducts(filters: any) {
        let query = productRepository.createQueryBuilder('product');

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
            } else if (filters.sorting === "high-low") {
                query = query.orderBy('product.price', 'DESC');
            }
        }

        return await query.getMany();
    }
}