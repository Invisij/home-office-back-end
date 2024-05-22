import orderService from '../services/orderService';

class OrderController {
    readOrder = async (req, res, next) => {
        try {
            const result = await orderService.readOrder(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createOrder = async (req, res, next) => {
        try {
            const result = await orderService.createOrder(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateOrder = async (req, res, next) => {
        try {
            const result = await orderService.updateOrder(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteOrder = async (req, res, next) => {
        try {
            const result = await orderService.deleteOrder(req.body);
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

module.exports = new OrderController();
