import { Request, Response } from "express";
import { RegisterService } from "../services/registerServices";

export class StudentController {
    static async addStudent(req: Request, res: Response) {
        try {
            const { name, email} = req.body;
            await RegisterService.addStudent(name, email);
            res.status(201).send("Student added successfully");
        } catch (err) {
            console.log(err);
            res.send({ "error": err });
        }
    }

    static async addStudentToCourse(req: Request, res: Response) {
        try {
            const { studentId, courseId } = req.body;
            const student = await RegisterService.addStudentToCourse(studentId, courseId);
            res.status(201).send("Student added to course successfully");
        } catch (err) {
            console.log(err);
            res.send({ "error": err });
        }
    }

    static async getStudent(req: Request, res: Response) {
        const studentId = parseInt(req.params.id);
        try {
            const student = await RegisterService.getStudent(studentId);
            res.status(200).send(student);
        } catch (err) {
            console.log(err);
            res.send({ "error": err });
        }
    }
}