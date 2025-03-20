import { orderRepository } from "../repositories/orderRepository";
import { productRepository } from "../repositories/productRepository";
import { userRepository } from "../repositories/userRepository";
import orderItemRepository from "../repositories/orderItemRepository";

export class OrderServices{

    static async addProduct(productName:string,price:number){
        try{
            const product = productRepository.create({productName,price});
            await productRepository.save(product);
            return product;
        }catch(err:any){
            console.log("Error from service:",err.message);
            return err;
        }

    }

    static async createOrder(address:string,userId:number,productIds:number[]){
        try{
            const products = await productRepository.findByIds(productIds);
            const price = products.reduce((acc,product)=>acc+product.price,0);
            const order = orderRepository.create({address,products});

            const user=await userRepository.findOne({where:{id:userId},relations:["orders"]});

            if(!user){
                throw new Error("User not found");
            }

           
            user.orders.push(order);

            await userRepository.save(user);
            await orderRepository.save(order);
            return order;
        }catch(err:any){
            console.log("Error from service:",err.message);
            return err;
        }
     }

     static async getOrder(userId:number){
         try{
             const user = await userRepository.findOne({where:{id:userId},relations:["orders"]});
             if(!user){
                 throw new Error("User not found");
             }
             return user;
         }catch(err:any){
             console.log("Error from service:",err.message);
             return err;
         }
     }

}