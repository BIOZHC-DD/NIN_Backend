import bcrypt from 'bcryptjs';
import * as authUtils from '../utils/authUtils';
import { postgresClient } from '../config/prisma';




export const registerUser = async (email: string, password: string): Promise<string> => {
    // Check if the user already exists
    const existingUser = await postgresClient.primeUser.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await postgresClient.primeUser.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    // Generate a JWT token
    const token = authUtils.generateToken({ email: user.email });
    return token;
}







export const loginUser = async (email: string, password: string): Promise<string> => {
    // Find the user by email
    const user = await postgresClient.primeUser.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error('User not found');
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    // Generate a JWT token
    const token = authUtils.generateToken({ email: user.email });
    return token;
};