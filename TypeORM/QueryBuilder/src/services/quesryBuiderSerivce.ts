import { userRepository } from "../repositories/QueryBuider";




export class QueryBuilderService {
    static async getUser(id: number) {
        return await userRepository.createQueryBuilder("user")
        .where("user.id = :id", { id: id })
        .getOne();
    }
}