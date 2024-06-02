import db from '../models';

class cartService {
    static readCart = async ({ id, userId }) => {
        try {
            let carts;
            if (id) {
                carts = await db.Cart.findAll({
                    where: { id },
                });
            } else if (userId) {
                carts = await db.Cart.findAll({
                    where: { userId },
                });
            } else {
                carts = await db.Cart.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: carts,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createCart = async ({ userId, amount, description }) => {
        try {
            if (!userId) {
                return {
                    errCode: 2,
                    message: 'Missing userId',
                };
            }
            const isCartExists = await db.Cart.findOne({
                where: { userId },
            });
            if (isCartExists) {
                return {
                    errCode: 3,
                    message: 'This cart already exists',
                };
            }
            const newCart = await db.Cart.create({
                userId,
                amount,
                description,
            });
            return {
                errCode: 0,
                message: 'Created a new cart successful',
                data: newCart,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateCart = async ({ id, userId, amount, description }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const cart = await db.Cart.findOne({
                where: { id },
            });
            if (cart) {
                await db.Cart.update({ userId, amount, description }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit cart succcessful',
                    cart,
                };
            }
            return {
                errCode: 3,
                message: 'Edit cart failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteCart = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const cart = await db.Cart.findOne({
                where: { id },
            });
            if (!cart) {
                return {
                    errCode: 3,
                    message: `Delete cart failed, cart don't exist`,
                };
            }
            await db.Cart.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete cart successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = cartService;
