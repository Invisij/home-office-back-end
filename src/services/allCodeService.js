import db from '../models';

class allCodeService {
    static getAllCode = async ({ type }) => {
        try {
            let allCode;
            if (type.trim()) {
                allCode = await db.AllCode.findAll({
                    where: {
                        type,
                    },
                });
            } else {
                allCode = await db.AllCode.findAll();
            }
            if (allCode) {
                return {
                    errCode: 0,
                    message: 'Get all code successful',
                    allCode,
                };
            }
            return {
                errCode: 1,
                message: 'Get all code failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = allCodeService;
