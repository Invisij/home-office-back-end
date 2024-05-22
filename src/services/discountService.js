import db from '../models';

class discountService {
    static readDiscount = async ({ name }) => {
        try {
            let discounts;
            if (name) {
                discounts = await db.Discount.findAll({
                    where: { name },
                });
            } else {
                discounts = await db.Discount.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: discounts,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createDiscount = async ({ name, number, description }) => {
        try {
            if (!name) {
                return {
                    errCode: 2,
                    message: 'Missing name',
                };
            }
            if (!number) {
                return {
                    errCode: 2,
                    message: 'Missing number',
                };
            }
            const isDiscountExists = await db.Discount.findOne({
                where: { name },
            });
            if (isDiscountExists) {
                return {
                    errCode: 3,
                    message: 'This order already exists',
                };
            }
            const newDiscount = await db.Discount.create({
                name,
                number,
                description,
            });
            return {
                errCode: 0,
                message: 'Created a new discount successful',
                data: newDiscount,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateDiscount = async ({ id, name, number, description }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const discount = await db.Discount.findOne({
                where: { id },
            });
            if (discount) {
                await db.Discount.update({ name, number, description }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit discount succcessful',
                    discount,
                };
            }
            return {
                errCode: 3,
                message: 'Edit discount failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteDiscount = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const discount = await db.Discount.findOne({
                where: { id },
            });
            if (!discount) {
                return {
                    errCode: 3,
                    message: `Delete discount failed, discount don't exist`,
                };
            }
            await db.Discount.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete discount successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = discountService;
