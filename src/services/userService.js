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
                    data: { id: user.id, roleId: user.roleId, firstName: user.firstName, lastName: user.lastName },
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
    static readUser = async ({ id, firstName }) => {
        try {
            let users;
            if (firstName) {
                users = await db.User.findAll({
                    where: { firstName },
                });
            } else if (id) {
                users = await db.User.findAll({
                    where: { id },
                });
            } else {
                users = await db.User.findAll();
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
    static createUser = async ({ email, password, roleId, firstName, lastName, phoneNumber, billingAddress }) => {
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
                roleId,
                firstName,
                lastName,
                phoneNumber,
                billingAddress,
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
    static updateUser = async ({ id, roleId, firstName, lastName, phoneNumber, billingAddress }) => {
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
                await db.User.update({ roleId, firstName, lastName, phoneNumber, billingAddress }, { where: { id } });
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
