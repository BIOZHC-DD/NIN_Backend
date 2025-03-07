import e, { Request, Response } from 'express';
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

        // Call the authService to authenticate the user and generate a token
        const token = await authService.loginUser(email, password);

        // Set the token in an HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict',
            maxAge: 3600000, 
        });

// Respond with a success message (optional: you can also return the token in the response)
res.status(200).json({ message: 'Login successful' });
} catch (error: any) {
// Handle errors (e.g., invalid credentials)
res.status(401).json({ message: error.message });
}
};


export const logout = async (req: Request, res: Response) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
            sameSite: 'strict',
        });

        // Send a success response
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error: any) {
        // Handle errors
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

   