import * as patientService from '../services/patientServices';
import { Request, Response } from 'express';

export const getAllPatients = async (req: Request, res: Response) => {
    try {
        const patients = await patientService.getAllPatients();
        res.status(200).json(patients);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};