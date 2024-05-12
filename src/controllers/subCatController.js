import subCatService from '../services/subCatService';

class SubCatController {
    readSubCat = async (req, res, next) => {
        try {
            const result = await subCatService.readSubCat(req.query);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    createSubCat = async (req, res, next) => {
        try {
            const result = await subCatService.createSubCat(req.body);
            return res.status(201).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || [],
            });
        } catch (error) {
            next(error);
        }
    };
    updateSubCat = async (req, res, next) => {
        try {
            const result = await subCatService.updateSubCat(req.body);
            return res.status(200).json({
                errCode: result.errCode,
                message: result.message,
                data: result.data || {},
            });
        } catch (error) {
            next(error);
        }
    };
    deleteSubCat = async (req, res, next) => {
        try {
            const result = await subCatService.deleteSubCat(req.body);
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

module.exports = new SubCatController();
