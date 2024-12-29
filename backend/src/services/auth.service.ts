
import db from '../db/db';
import { verifyPassword } from '../utils/passwordUtils';
import { generateToken } from '../utils/tokenUtils';

const User = db.users;

export const login = async (user_name: string, password: string) => {
    const user = await User.findOne({ where: { user_name } });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    // Remove password from the user object before returning
    const { password: _, ...userWithoutPassword } = user.toJSON();

    const token = generateToken(userWithoutPassword, '7d');
    return token;  // Return user details without the password
};

