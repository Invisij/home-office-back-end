'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
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
