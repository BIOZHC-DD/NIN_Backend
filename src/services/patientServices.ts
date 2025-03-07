import {postgresClient} from '../config/prisma';

export const getAllPatients = async () => {


    return await postgresClient.patient.findMany();
    
    
};