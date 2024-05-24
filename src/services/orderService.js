import db from '../models';

class orderService {
    static readOrder = async ({ id, customerId }) => {
        try {
            let orders;
            if (id) {
                orders = await db.Order.findAll({
                    where: { id },
                });
            } else if (customerId) {
                orders = await db.Order.findAll({
                    where: { customerId },
                });
            } else {
                orders = await db.Order.findAll();
            }
            return {
                errCode: 0,
                message: 'query successful',
                data: orders,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static createOrder = async ({ customerId, amount, orderAddress, orderStatus, description }) => {
        try {
            if (!customerId) {
                return {
                    errCode: 2,
                    message: 'Missing name',
                };
            }
            if (!orderAddress) {
                return {
                    errCode: 2,
                    message: 'Missing order address',
                };
            }
            if (!orderStatus) {
                return {
                    errCode: 2,
                    message: 'Missing order status',
                };
            }
            const newOrder = await db.Order.create({
                customerId,
                amount,
                orderAddress,
                orderStatus,
                description,
            });
            return {
                errCode: 0,
                message: 'Created a new order successful',
                data: newOrder,
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static updateOrder = async ({ id, amount, orderAddress, orderStatus, description }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const order = await db.Order.findOne({
                where: { id },
            });
            if (order) {
                await db.Order.update({ amount, orderAddress, orderStatus, description }, { where: { id } });
                return {
                    errCode: 0,
                    message: 'Edit order succcessful',
                    order,
                };
            }
            return {
                errCode: 3,
                message: 'Edit order failed',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
    static deleteOrder = async ({ id }) => {
        try {
            if (!id) {
                return {
                    errCode: 2,
                    message: 'Missing id',
                };
            }
            const order = await db.Order.findOne({
                where: { id },
            });
            if (!order) {
                return {
                    errCode: 3,
                    message: `Delete order failed, order don't exist`,
                };
            }
            await db.Order.destroy({
                where: { id },
            });
            return {
                errCode: 0,
                message: 'Delete order successful',
            };
        } catch (error) {
            return {
                errCode: 1,
                message: error.message,
            };
        }
    };
}

module.exports = orderService;
