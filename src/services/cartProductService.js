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
            } else if (cartId) {
                cartProducts = await db.CartProduct.findAll({
                    where: { cartId },
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
    static createCartProduct = async ({ cartId, productId, price, quantity }) => {
        try {
            if (!cartId) {
                return {
                    errCode: 2,
                    message: 'Missing cartId',
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
                where: { cartId, productId },
            });
            if (isCartProductExists) {
                return {
                    errCode: 3,
                    message: 'This cartProduct already exists',
                    data: isCartProductExists,
                };
            }
            const newCartProduct = await db.CartProduct.create({
                cartId,
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
    static updateCartProduct = async ({ id, cartId, productId, price, quantity }) => {
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
                await db.CartProduct.update({ cartId, productId, price, quantity }, { where: { id } });
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
    static deleteCartProduct = async ({ id, cartId, productId }) => {
        try {
            if (cartId && productId) {
                await db.CartProduct.destroy({
                    where: { cartId, productId },
                });
            } else if (cartId) {
                await db.CartProduct.destroy({
                    where: { cartId },
                });
            } else if (productId) {
                await db.CartProduct.destroy({
                    where: { productId },
                });
            } else if (id) {
                await db.CartProduct.destroy({
                    where: { id },
                });
            } else {
                return {
                    errCode: 2,
                    message: 'Missing param to delete cartProduct',
                };
            }
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
