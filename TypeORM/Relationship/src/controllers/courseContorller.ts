import { Request, Response } from "express";
import { RegisterService } from "../services/registerServices";

export class CourseController {
    static async addCourse(req: Request, res: Response) {
        try {
            const { name, duration} = req.body;
            const student = await RegisterService.addCourse(name, duration);
            res.status(201).send("Course added successfully");
        } catch (err) {
            console.log(err);
            res.send({ "error": err });
        }
    }
}