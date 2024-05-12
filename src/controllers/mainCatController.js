import mainCatService from '../services/mainCatService';

class MainCatController {
    readMainCat = async (req, res, next) => {
        try {
            const result = await mainCatService.readMainCat(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createMainCat = async (req, res, next) => {
        try {
            const result = await mainCatService.createMainCat(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateMainCat = async (req, res, next) => {
        try {
            const result = await mainCatService.updateMainCat(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteMainCat = async (req, res, next) => {
        try {
            const result = await mainCatService.deleteMainCat(req.body);
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

module.exports = new MainCatController();
