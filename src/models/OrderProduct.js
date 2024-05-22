'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class OrderProduct extends Model {
        static associate(models) {
            OrderProduct.belongsTo(models.Order, {
                foreignKey: 'orderId',
                as: 'order',
            });
            OrderProduct.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product',
            });
        }
    }
    OrderProduct.init(
        {
            orderId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'OrderProduct',
        },
    );
    return OrderProduct;
};
