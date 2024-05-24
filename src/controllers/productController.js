import productService from '../services/productService';

class ProductController {
    readProduct = async (req, res, next) => {
        try {
            const result = await productService.readProduct(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createProduct = async (req, res, next) => {
        try {
            const result = await productService.createProduct(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateProduct = async (req, res, next) => {
        try {
            const result = await productService.updateProduct(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteProduct = async (req, res, next) => {
        try {
            const result = await productService.deleteProduct(req.body);
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

module.exports = new ProductController();
