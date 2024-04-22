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
                code: 'xxx',
                message: error.message,
                status: 'error',
            };
        }
    };
    static readUser = async () => {
        try {
            const users = await db.User.findAll({
                raw: true,
            });
            return {
                code: 201,
                users,
            };
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error',
            };
        }
    };
    static editUser = async (id) => {
        try {
            const user = await db.User.findOne({
                where: { id },
                raw: true,
            });
            if (user) {
                return {
                    code: 201,
                    user,
                };
            }
            return {
                code: 200,
                message: 'Find user fail',
            };
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error',
            };
        }
    };
    static putUser = async ({ id, firstName, lastName, role, phoneNumber, address }) => {
        try {
            const user = await db.User.findOne({
                where: { id },
            });
            if (user) {
                user.firstName = firstName;
                user.lastName = lastName;
                user.role = role;
                user.phoneNumber = phoneNumber;
                user.address = address;
                await user.save();
                return {
                    code: 201,
                    user,
                };
            }
            return {
                code: 200,
                message: 'Update user fail',
            };
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error',
            };
        }
    };
    static deleteUser = async (id) => {
        try {
            const user = await db.User.findOne({
                where: { id },
            });
            if (user) {
                await user.destroy();
                return {
                    code: 201,
                    message: 'Delete user success',
                };
            }
            return {
                code: 200,
                message: 'Delete user fail',
            };
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error',
            };
        }
    };
}

module.exports = CRUDService;
