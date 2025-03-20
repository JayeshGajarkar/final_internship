import { Entity,PrimaryGeneratedColumn,Column, ManyToMany, JoinTable } from "typeorm";
import { Course } from "./course";

@Entity("Student_28")
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToMany(() => Course, course => course.students)
    @JoinTable()
    courses: Course[];
}