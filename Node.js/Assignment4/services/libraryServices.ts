import { libraryRepository } from "../repositories/libraryRepository";

export class libraryService{
    
    static async addBook(title:string,author:string,email:string){
        libraryRepository.addBook(title,author,email);
    } 

    static async updateBook(title:string,author:string,email:string,id:number){
        libraryRepository.updateBook(title,author,email,id);
    } 

    static async removeBook(id:number){
        libraryRepository.removeBook(id);
    } 


    static async viewBook(id:number){
        const book=await libraryRepository.viewBook(id);
        return book;
    }

    static async searchBook(key:string){
        const book=await libraryRepository.searchBook(key);
        return book;
    }

    static async borrowBook(id:number){
        const book=await libraryRepository.borrowBook(id);
        return book;
    }
}