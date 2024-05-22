import orderProductService from '../services/orderProductService';

class OrderProductController {
    readOrderProduct = async (req, res, next) => {
        try {
            const result = await orderProductService.readOrderProduct(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createOrderProduct = async (req, res, next) => {
        try {
            const result = await orderProductService.createOrderProduct(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateOrderProduct = async (req, res, next) => {
        try {
            const result = await orderProductService.updateOrderProduct(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteOrderProduct = async (req, res, next) => {
        try {
            const result = await orderProductService.deleteOrderProduct(req.body);
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

module.exports = new OrderProductController();
