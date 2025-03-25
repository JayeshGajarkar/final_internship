import { userRepository } from "../repositories/userRepository";
import { profileRepository } from "../repositories/profileRepository";

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



}
