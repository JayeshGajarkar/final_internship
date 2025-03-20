import { Entity,PrimaryGeneratedColumn,Column, ManyToMany } from "typeorm";
import { Order } from "./order";

@Entity("Product_29")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    price: number;

    @ManyToMany(() => Order, order => order.products)
    order: Order;
}