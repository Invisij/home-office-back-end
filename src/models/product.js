'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.hasMany(models.OrderProduct, {
                foreignKey: 'productId',
                as: 'orderProducts',
            });
            Product.belongsTo(models.SubCat, {
                foreignKey: 'subCatId',
                as: 'subCat',
            });
            Product.hasMany(models.CartProduct, {
                foreignKey: 'productId',
                as: 'cartProducts',
            });
            Product.belongsTo(models.Discount, {
                foreignKey: 'discountId',
                as: 'discount',
            });
        }
    }
    Product.init(
        {
            subCatId: DataTypes.INTEGER,
            discountId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            sku: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
            status: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Product',
        },
    );
    return Product;
};
