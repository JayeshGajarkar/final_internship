import { Router } from "express";
import { CourseController } from "../controllers/courseContorller";


const courseRouter = Router();
courseRouter.post("/addCourse", CourseController.addCourse);

export default courseRouter;