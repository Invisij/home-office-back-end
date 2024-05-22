'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Discount extends Model {
        static associate(models) {
            Discount.hasMany(models.Product, {
                foreignKey: 'discountId',
                as: 'products',
            });
        }
    }
    Discount.init(
        {
            number: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Discount',
        },
    );
    return Discount;
};
