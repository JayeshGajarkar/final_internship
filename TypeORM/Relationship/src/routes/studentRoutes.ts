import { Router } from "express";
import { StudentController } from "../controllers/studentController";

const studentRotuer = Router();
studentRotuer.post("/addStudent", StudentController.addStudent);
studentRotuer.post("/addStudentToCourse", StudentController.addStudentToCourse);
studentRotuer.get("/getStudent/:id", StudentController.getStudent);
export default studentRotuer;
