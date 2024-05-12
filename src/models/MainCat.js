'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class MainCat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
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
