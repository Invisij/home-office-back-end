import bcrypt from 'bcrypt';
import db from '../models';

class CRUDService {
    static createNewUser = async ({ email, password, role, firstName, lastName, phoneNumber, address, ...props }) => {
        try {
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = await db.User.create({
                email,
                password: passwordHash,
                role,
                firstName,
                lastName,
                phoneNumber,
                address,
            });
            return {
                code: 201,
                newUser,
            };
        } catch (error) {
            return {
                code: 'error',
                message: error.message,
                status: 'error',
            };
        }
    };
}

module.exports = CRUDService;
