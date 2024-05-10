'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product.init(
        {
            subCatId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            sku: DataTypes.STRING,
            image: DataTypes.BLOB,
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
