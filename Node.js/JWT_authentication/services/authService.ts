const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userAuthRepository = require('../repositories/userRepository');
const SECRET_KEY = process.env.SECRET_KEY || 'jayesh';

class AuthService {
    static async registerUser(name: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await userAuthRepository.createUser(name, email, hashedPassword);
    }

    static async loginUser(email: string, password: string) {
        const user = await userAuthRepository.getUserByEmail(email);
        if (!user) throw new Error('User not found');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid credentials');
        const token = jwt.sign({ name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        return { user, token };
    }

    static async getAllUsers() {
        try{
            const users = await userAuthRepository.getAllUsers();
            return users;
        }catch(error:any){
            console.log(error);
        }
    }
}

module.exports = AuthService;