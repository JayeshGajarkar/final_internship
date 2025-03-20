import { Entity,PrimaryGeneratedColumn,Column, ManyToMany } from "typeorm";
import { Student } from "./student";

@Entity("Course_28")
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    duration: string;

    @ManyToMany(() => Student, student => student.courses)
    students: Student[];
}