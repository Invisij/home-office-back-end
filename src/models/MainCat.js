'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class MainCat extends Model {
        static associate(models) {
            MainCat.hasMany(models.SubCat, {
                foreignKey: 'mainCatId',
                as: 'subCats',
            });
        }
    }
    MainCat.init(
        {
            name: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'MainCat',
        },
    );
    return MainCat;
};
