import bcrypt from 'bcrypt';
import db from '../models';

class userService {
    static login = async ({ email, password, ...props }) => {
        try {
            if (!email) {
                return {
                    errCode: 1,
                    message: 'Missing email',
                };
            }

            if (!password) {
                return {
                    errCode: 1,
                    message: 'Missing password',
                };
            }

            const user = await db.User.findOne({
                where: { email },
                raw: true,
            });

            if (!user) {
                return {
                    errCode: 2,
                    message: `Your's email don't exists`,
                };
            }

            const correctPassword = await bcrypt.compare(password, user.password);
            if (correctPassword) {
                return {
                    errCode: 0,
                    message: 'Login successful',
                    user: { id: user.id, role: user.role },
                };
            }

            return {
                errCode: 2,
                message: 'Wrong password',
            };
        } catch (error) {
            return {
                errCode: 3,
                message: error.message,
            };
        }
    };
}

module.exports = userService;
