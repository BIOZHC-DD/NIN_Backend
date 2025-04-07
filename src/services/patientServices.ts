import prisma from '../config/client';

export const getAllPatients = async () => {
  return await prisma.patient.findMany();
};

export const getPatientById = async (id: string) => {
  try {
    console.log('🔍 Received ID:', id);

    const patient = await prisma.patient.findUnique({
      where: { id: id },
      include: {
        clinic: {
          select: {
            bloodGroup:true,
            antigenStatus:true,
            systolic:true,
            diastolic:true,
            temperature:true,
            smokingType:true,
            overAllYearOfSmoking:true,
            dailyConsumption:true,
            smokingIndex:true,
            alcoholType:true,
            alcoholConsumption:true,
            hemoglobin:true,
            reacentHealthIssue:true,
            hereditaryHistory:true,
          },
         
        },
        visits: {
          select: {
            id: true,
            visitDate: true,
            visitNotes: true,
            visitType: true,
            encounterfhirid: true,
            
          },
        }
        
      
      }
    });

    console.log('📌 Prisma Query Result:', patient);

    return patient;
  } catch (error) {
    console.error('❌ Error fetching patient by ID:', error);
    throw new Error('Failed to fetch patient');
  }
};
