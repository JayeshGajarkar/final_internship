import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User_J3 } from "./user";

@Entity()
export class Profile_J3 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    bio: string;

    @OneToOne(() => User_J3)
    user: User_J3;
}