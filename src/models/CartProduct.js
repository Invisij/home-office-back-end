'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class CartProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    CartProduct.init(
        {
            cartId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'CartProduct',
        },
    );
    return CartProduct;
};
