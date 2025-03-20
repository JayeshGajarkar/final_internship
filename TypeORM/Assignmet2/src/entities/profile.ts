import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user";

@Entity("Profile_29")
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    bio: string;

    @OneToOne(() => User,user=>user.profile,{cascade:true,onDelete:'CASCADE'})
    @JoinColumn()
    user: User;
}