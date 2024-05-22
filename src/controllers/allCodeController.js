import allCodeService from '../services/allCodeService';

class AllCodeController {
    getAllCode = async (req, res, next) => {
        try {
            const result = await allCodeService.getAllCode(req.query);
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
}

module.exports = new AllCodeController();
