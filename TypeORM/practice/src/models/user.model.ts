import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User_J {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  age!: number;
}