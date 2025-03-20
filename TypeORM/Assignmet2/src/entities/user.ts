import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, Or } from "typeorm";
import { Profile} from "../entities/profile";
import { Order } from "./order";

@Entity("User_29")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @OneToOne(() => Profile)
    profile: Profile;

    @OneToMany(()=>Order, order => order.user,{cascade:true})
    orders: Order[];
}