import { QueryBuilderService } from "../services/quesryBuiderSerivce";
import { Request, Response } from "express";
export class queryController {
    static async getUser(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await QueryBuilderService.getUser(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}