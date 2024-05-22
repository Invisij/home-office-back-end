import db from '../models';

class orderProductService {
    static readOrderProduct = async ({ id, orderId, productId }) => {
        try {
            let orderProducts;
            if (id) {
                orderProducts = await db.OrderProduct.findAll({
                    where: { id },
                });
            } else if (productId && orderId) {
                orderProducts = await db.OrderProduct.findAll({
                    where: { productId, orderId },
                });
            } else {
                orderProducts = await db.OrderProduct.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: orderProducts,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createOrderProduct = async ({ orderId, productId, price, quantity }) => {
        try {
            if (!orderId) {
                return {
                    errCode: 2,
                    message: 'Missing orderId',
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
            const isOrderProductExists = await db.OrderProduct.findOne({
                where: { orderId, productId },
            });
            if (isOrderProductExists) {
                return {
                    errCode: 3,
                    message: 'This orderProduct already exists',
                };
            }
            const newOrderProduct = await db.OrderProduct.create({
                orderId,
                productId,
                price,
                quantity,
            });
            return {
                errCode: 0,
                message: 'Created a new orderProduct successful',
                data: newOrderProduct,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateOrderProduct = async ({ id, orderId, productId, price, quantity }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const orderProduct = await db.OrderProduct.findOne({
                where: { id },
            });
            if (orderProduct) {
                await db.OrderProduct.update({ orderId, productId, price, quantity }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit orderProduct succcessful',
                    orderProduct,
                };
            }
            return {
                errCode: 3,
                message: 'Edit orderProduct failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteOrderProduct = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const orderProduct = await db.OrderProduct.findOne({
                where: { id },
            });
            if (!orderProduct) {
                return {
                    errCode: 3,
                    message: `Delete orderProduct failed, orderProduct don't exist`,
                };
            }
            await db.OrderProduct.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete orderProduct successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = orderProductService;
