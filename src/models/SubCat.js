'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class SubCat extends Model {
        static associate(models) {
            SubCat.belongsTo(models.MainCat, {
                foreignKey: 'mainCatId',
                as: 'mainCat',
            });
            SubCat.hasMany(models.Product, {
                foreignKey: 'subCatId',
                as: 'products',
            });
        }
    }
    SubCat.init(
        {
            mainCatId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'SubCat',
        },
    );
    return SubCat;
};
