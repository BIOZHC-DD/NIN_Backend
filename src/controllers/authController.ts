import { Request, Response } from 'express';
import * as authService from '../services/authServices';


export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
    
        const user = await authService.registerUser(email, password);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};      


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
    
        const token = await authService.loginUser(email, password);
        res.status(200).json({ token });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};