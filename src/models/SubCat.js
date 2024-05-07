'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class SubCat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SubCat.init(
        {
            mainCatId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            image: DataTypes.TEXT,
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
