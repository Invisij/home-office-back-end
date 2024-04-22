'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Promotion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Promotion.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            numberof: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Promotion',
        },
    );
    return Promotion;
};
