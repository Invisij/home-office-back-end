'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class CartProduct extends Model {
        static associate(models) {
            CartProduct.belongsTo(models.Cart, {
                foreignKey: 'cartId',
                as: 'cart',
            });
            CartProduct.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product',
            });
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
