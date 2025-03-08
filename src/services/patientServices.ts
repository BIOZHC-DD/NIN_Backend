import { postgresClient } from '../config/prisma';

export const getAllPatients = async () => {


    return await postgresClient.patient.findMany();
    
    
};

export const getPatientById = async (id: string) => {
    try {
        console.log("🔍 Received ID:", id);

        const patient = await postgresClient.patient.findUnique({
            where: { id: id }
        });

        console.log("📌 Prisma Query Result:", patient);
       
        return patient;
    } catch (error) {
        console.error('❌ Error fetching patient by ID:', error);
        throw new Error('Failed to fetch patient');
    }
};

