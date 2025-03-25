import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user";
import { Product } from "./product";

@Entity("Order_29")
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    price: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToMany(() => Product, product => product.order)
    @JoinTable()
    products: Product[];
}