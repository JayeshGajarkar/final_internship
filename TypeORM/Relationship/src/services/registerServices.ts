import { userRepository } from "../repositories/userRepository";
import { profileRepository } from "../repositories/profileRepository";
import { studentRepository } from "../repositories/studentRepository";
import { courseRepository } from "../repositories/courseRepository";
import { relative } from "path";

export class RegisterService {
    static async registerUser(name: string, email: string, bio: string) {
        try {
            const user = userRepository.create({ name, email });
            const profile = profileRepository.create({ bio, user });


            await profileRepository.save(profile);


            return { user, profile };
        } catch (err: any) {
            console.log("Error from service:", err.message);
            return err;
        }
    }

    static async deleteUser(id: number) {
        try {
            const user = await userRepository.findOne({ where: { id } });
            if (!user) {
                throw new Error("User not found");
            }

            await userRepository.remove(user);
        } catch (err) {
            console.log("Error from service:", err.message);
            return err;
        }
    }

    static async addStudent(name: string, email: string) {
        try {
            const student = studentRepository.create({ name: name, email: email});
            await studentRepository.save(student);
        }catch(err:any){
            console.log("Error from service:", err);
            return err;
        }

    };


    static async addCourse(name: string, duration: string) {
        try {
            const course = courseRepository.create({ name: name, duration: duration});
            await courseRepository.save(course);
        } catch (err: any) {
            console.log("Error from service:", err);
            return err;
        }
    }

    static async addStudentToCourse(studentId: number, courseId: number) {
        try {
            const student = await studentRepository.findOne({ where: { id: studentId } ,relations:["courses"]});
            if (!student) {
                throw new Error("Student not found");
            }

            const course = await courseRepository.findOne({ where: { id: courseId },relations:["students"] });
            if (!course) {
                throw new Error("Course not found");
            }


            student.courses.push(course);
            course.students.push(student);

            await courseRepository.save(course);
            await studentRepository.save(student);
        } catch (err: any) {
            console.log("Error from service:", err);
            return err;
        }
    }

    static async getStudent(studentId:number){
        try{
            const student = await studentRepository.findOne({where:{id:studentId}, relations:["courses"]});
            if(!student){
                throw new Error("Student not found");
            }
            return student;
        }catch(err:any){
            console.log("Error from service:", err);
            return err;
        }
    }




}
