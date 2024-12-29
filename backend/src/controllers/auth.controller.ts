import { Request, Response } from 'express';
import { login } from '../services/auth.service';

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { user_name, password } = req.body;

        const token = await login(user_name, password);

        res.cookie('auth',token);
        res.status(200).json({
            status : 'success',
            message:'Login successfull',
            token  : token
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}