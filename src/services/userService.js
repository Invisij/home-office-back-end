import bcrypt from 'bcrypt';
import db from '../models';

class userService {
    static login = async ({ email, password }) => {
        try {
            if (!email) {
                return {
                    errCode: 2,
                    message: 'Missing email',
                };
            }

            if (!password) {
                return {
                    errCode: 2,
                    message: 'Missing password',
                };
            }

            const user = await db.User.findOne({
                where: { email },
            });

            if (!user) {
                return {
                    errCode: 3,
                    message: `Your's email don't exists`,
                };
            }

            const correctPassword = await bcrypt.compare(password, user.password);
            if (correctPassword) {
                return {
                    errCode: 0,
                    message: 'Login successful',
                    data: { id: user.id, role: user.role },
                };
            }

            return {
                errCode: 3,
                message: 'Wrong password',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static readUser = async ({ firstName }) => {
        try {
            let users;
            if (!firstName) {
                users = await db.User.findAll();
            } else {
                users = await db.User.findAll({
                    where: { firstName },
                });
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: users,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createUser = async ({ email, password, role, firstName, lastName, phoneNumber, address }) => {
        try {
            if (!email) {
                return {
                    errCode: 2,
                    message: 'Missing email',
                };
            }

            if (!password) {
                return {
                    errCode: 2,
                    message: 'Missing password',
                };
            }
            const isEmailExists = await db.User.findOne({
                where: { email },
            });
            if (isEmailExists) {
                return {
                    errCode: 3,
                    message: 'This email already exists',
                };
            }
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
                errCode: 0,
                message: 'Created a new user successful',
                data: newUser,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateUser = async ({ id, role, firstName, lastName, phoneNumber, address }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const user = await db.User.findOne({
                where: { id },
            });
            if (user) {
                await db.User.update({ role, firstName, lastName, phoneNumber, address }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit user succcessful',
                    user,
                };
            }
            return {
                errCode: 3,
                message: 'Edit user failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteUser = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const user = await db.User.findOne({
                where: { id },
            });
            if (!user) {
                return {
                    errCode: 3,
                    message: `Delete user failed, user don't exist`,
                };
            }
            await db.User.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete user successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = userService;
