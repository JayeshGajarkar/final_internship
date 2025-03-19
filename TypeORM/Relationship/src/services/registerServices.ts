import { userRepository } from "../repositories/userRepository";
import { profileRepository } from "../repositories/profileRepository";

export class RegisterService {
    static async registerUser(name: string, email: string, bio: string) {
        try {
            const user = userRepository.create({ name, email });
            const profile = profileRepository.create({ bio });

            user.profile = profile;

            

            profile.user = user;

            console.log("User before save:", user);
            console.log("Profile before save:", profile);

            await userRepository.save(user);

            await profileRepository.save(profile);

            return { user, profile };
        } catch (err:any) {
            console.log("Error from service:",err.message);
            return err;
        }
    }
}