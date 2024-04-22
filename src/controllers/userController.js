import db from '../models';
import userService from '../services/userService';

class UserController {
    // Auth
    login = async (req, res, next) => {
        try {
            const result = await userService.login(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                user: result.user || {},
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new UserController();
