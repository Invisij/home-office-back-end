'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class SubCategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SubCategory.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            image: DataTypes.TEXT,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'SubCategory',
        },
    );
    return SubCategory;
};
