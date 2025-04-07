import { Request, Response } from 'express';
import * as bioService from '../services/bioimpedenceServices';


export const getBioimpedenceByvid = async (req: Request, res: Response) => {
  try {
    const { visitId } = req.params;
    const bioimpedence = await bioService.getBioimpedenceByvid(visitId);
    res.status(200).json(bioimpedence);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};