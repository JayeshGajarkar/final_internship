import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, Or } from "typeorm";


@Entity("User_30")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;
}