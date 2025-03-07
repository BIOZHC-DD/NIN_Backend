import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/authUtils';

export const authMiddleware = (req: Request, res: Response, next: NextFunction):any => {
    const token = req.cookies.token || req.headers['x-access-token'];
   

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
        // ⬆️ Added 'return' here to prevent further execution
    }

    try {
        const decoded = verifyToken(token);
    
        (req as any).user = decoded;  
        next(); 
    } catch (error) {
        return res.status(403).json({ message: "Forbidden: Invalid or expired token" });
        // ⬆️ Added 'return' here as well
    }
};