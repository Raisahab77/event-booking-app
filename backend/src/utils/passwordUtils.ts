import bcrypt from 'bcrypt';

export const generateHashedPassword = async (password: string): Promise<string> => {
    const hashed = await bcrypt.hash(password, 10);
    return hashed;
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
};