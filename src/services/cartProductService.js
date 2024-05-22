import db from '../models';

class cartProductService {
    static readCartProduct = async ({ id, cartId, productId }) => {
        try {
            let cartProducts;
            if (id) {
                cartProducts = await db.CartProduct.findAll({
                    where: { id },
                });
            } else if (cartId && productId) {
                cartProducts = await db.CartProduct.findAll({
                    where: { cartId, productId },
                });
            } else {
                cartProducts = await db.CartProduct.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: cartProducts,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createCartProduct = async ({ cardId, productId, price, quantity }) => {
        try {
            if (!cardId) {
                return {
                    errCode: 2,
                    message: 'Missing cardId',
                };
            }
            if (!productId) {
                return {
                    errCode: 2,
                    message: 'Missing productId',
                };
            }
            if (!price) {
                return {
                    errCode: 2,
                    message: 'Missing price',
                };
            }
            if (!quantity) {
                return {
                    errCode: 2,
                    message: 'Missing quantity',
                };
            }
            const isCartProductExists = await db.CartProduct.findOne({
                where: { cardId, productId },
            });
            if (isCartProductExists) {
                return {
                    errCode: 3,
                    message: 'This cartProduct already exists',
                };
            }
            const newCartProduct = await db.CartProduct.create({
                cardId,
                productId,
                price,
                quantity,
            });
            return {
                errCode: 0,
                message: 'Created a new cartProduct successful',
                data: newCartProduct,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateCartProduct = async ({ id, cardId, productId, price, quantity }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const cartProduct = await db.CartProduct.findOne({
                where: { id },
            });
            if (cartProduct) {
                await db.CartProduct.update({ cardId, productId, price, quantity }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit cartProduct succcessful',
                    cartProduct,
                };
            }
            return {
                errCode: 3,
                message: 'Edit cartProduct failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteCartProduct = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const cartProduct = await db.CartProduct.findOne({
                where: { id },
            });
            if (!cartProduct) {
                return {
                    errCode: 3,
                    message: `Delete cartProduct failed, cartProduct don't exist`,
                };
            }
            await db.CartProduct.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete cartProduct successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = cartProductService;
