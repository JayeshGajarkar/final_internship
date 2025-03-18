import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Recipe_J {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',length:255})
    name:string;

    @Column({type:'text'})
    ingredients:string;

    @Column({type:'text'})
    instructions:string;

    @Column({type:'int'})
    cookingTime:number;
}