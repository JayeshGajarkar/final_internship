import { Response, Request } from "express";
import { libraryService } from "../services/libraryServices";

export class adminController {
    static async addBook(req: Request, res: Response) {
        try {
            const { title, author, email } = req.body;
            await libraryService.addBook(title, author, email);
            res.status(201).json("Book added sucessfully");
        } catch (error: any) {
            console.log(error);
            res.json({ error: error.message });
        }
    }

    static async updateBook(req: Request, res: Response) {
        const id=parseInt(req.params.id)
        try {
            const { title, author, email } = req.body;
            await libraryService.updateBook(title, author, email,id);
            res.status(201).json("Book updated sucessfully");
        } catch (error: any) {
            console.log(error);
            res.json({ error: error.message });
        }
    }

    static async removeBook(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await libraryService.removeBook(id);
            res.status(201).json("Book removed sucessfully");
        } catch (error: any) {
            console.log(error);
            res.json({ error: error.message });
        }
    }
}