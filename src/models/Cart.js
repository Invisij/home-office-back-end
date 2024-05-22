'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user',
            });
            Cart.hasMany(models.CartProduct, {
                foreignKey: 'cartId',
                as: 'cartProducts',
            });
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
