import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity("Product_31")
export class Product{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    category:string

    @Column()
    price:number

    @Column()
    brand:string

    @Column()
    rating:number

}