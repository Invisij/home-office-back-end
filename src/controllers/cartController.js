import cartService from '../services/cartService';

class CartController {
    readCart = async (req, res, next) => {
        try {
            const result = await cartService.readCart(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createCart = async (req, res, next) => {
        try {
            const result = await cartService.createCart(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateCart = async (req, res, next) => {
        try {
            const result = await cartService.updateCart(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteCart = async (req, res, next) => {
        try {
            const result = await cartService.deleteCart(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new CartController();
