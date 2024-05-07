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
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    readUser = async (req, res, next) => {
        try {
            const result = await userService.readUser(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    createUser = async (req, res, next) => {
        try {
            const result = await userService.createUser(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    updateUser = async (req, res, next) => {
        try {
            const result = await userService.updateUser(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteUser = async (req, res, next) => {
        try {
            const result = await userService.deleteUser(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    getAllCode = async (req, res, next) => {
        try {
            const result = await userService.getAllCode(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.allCode || [],
            });
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from server',
            });
        }
    };
    getImages = async (req, res, next) => {
        try {
            return 0;
        } catch (error) {
            next(error);
        }
    };
    postImages = async (req, res, next) => {
        try {
            return 0;
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new UserController();
