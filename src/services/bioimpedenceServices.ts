import prisma from '../config/client';

export const getBioimpedenceByvid = async (visitId: string) => {
  try {
    const bioimpedence = await prisma.biosensorData.findMany({
      where: {
        vid: visitId,
      },
    });

    return bioimpedence;
  } catch (error) {
    console.error('Error fetching biosensor data:', error);
    throw error;
  }
};
