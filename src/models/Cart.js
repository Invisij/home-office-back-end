'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Cart.init(
        {
            userId: DataTypes.INTEGER,
            amount: DataTypes.INTEGER,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Cart',
        },
    );
    return Cart;
};
