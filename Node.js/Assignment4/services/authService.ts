const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userAuthRepository = require('../repositories/userRepository');
const SECRET_KEY = process.env.SECRET_KEY || 'jayesh';

export class AuthService {

    static async loginUser(email: string, password: string) {
        const user = await userAuthRepository.getUserByEmail(email);
        if (!user) throw new Error('User not found');
        if (password!==user.password) throw new Error('Invalid credentials');
        const token = jwt.sign({ name: user.email, password:user.password,role:user.user_role}, SECRET_KEY, { expiresIn: '1h' });
        return { user, token };
    }

}
