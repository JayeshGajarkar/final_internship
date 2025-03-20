import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity("OrderItem_29")
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    price: number;
}