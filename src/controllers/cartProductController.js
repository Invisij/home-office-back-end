import cartProductService from '../services/cartProductService';

class CartProductController {
    readCartProduct = async (req, res, next) => {
        try {
            const result = await cartProductService.readCartProduct(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createCartProduct = async (req, res, next) => {
        try {
            const result = await cartProductService.createCartProduct(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateCartProduct = async (req, res, next) => {
        try {
            const result = await cartProductService.updateCartProduct(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteCartProduct = async (req, res, next) => {
        try {
            const result = await cartProductService.deleteCartProduct(req.body);
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

module.exports = new CartProductController();
