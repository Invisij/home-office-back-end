'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User, {
                foreignKey: 'customerId',
                as: 'user',
            });
            Order.hasMany(models.OrderProduct, {
                foreignKey: 'orderId',
                as: 'orderProducts',
            });
        }
    }
    Order.init(
        {
            customerId: DataTypes.INTEGER,
            amount: DataTypes.INTEGER,
            orderAddress: DataTypes.STRING,
            orderStatus: DataTypes.STRING,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Order',
        },
    );
    return Order;
};
