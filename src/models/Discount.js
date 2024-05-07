'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Discount extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
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
