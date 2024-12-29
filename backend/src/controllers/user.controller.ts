
import { Request, Response } from 'express';
import { getAll, getById, create, update, deleteOne } from '../services/user.service';
import { User } from '../models/user.model';

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const results : User[] = await getAll();
        const response = {
            "status": "success",
            "results": results.length,
            "data": results,
            "message": "Data fetched successfully"
          }
          
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await getById(req.params.id);
        if (!result) return res.status(404).json({ message: 'User not found' });

        const response = {
            "status": "success",
            "data": result,
            "message": "Data fetched successfully"
          }
          
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await create(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const updated = await update(req.params.id, req.body);
        if (updated) return res.json({ message: 'User updated' });
        return res.status(404).json({ message: 'User not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const deleted = await deleteOne(req.params.id);
        if (deleted) return res.json({ message: 'User deleted' });
        return res.status(404).json({ message: 'User not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}