'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Order, {
                foreignKey: 'customerId',
                as: 'orders',
            });
            User.hasOne(models.Cart, {
                foreignKey: 'userId',
                as: 'cart',
            });
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            billingAddress: DataTypes.STRING,
            roleId: DataTypes.STRING,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'User',
        },
    );
    return User;
};
