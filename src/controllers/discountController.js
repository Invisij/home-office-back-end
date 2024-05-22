import discountService from '../services/discountService';

class DiscountController {
    readDiscount = async (req, res, next) => {
        try {
            const result = await discountService.readDiscount(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createDiscount = async (req, res, next) => {
        try {
            const result = await discountService.createDiscount(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateDiscount = async (req, res, next) => {
        try {
            const result = await discountService.updateDiscount(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteDiscount = async (req, res, next) => {
        try {
            const result = await discountService.deleteDiscount(req.body);
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

module.exports = new DiscountController();
