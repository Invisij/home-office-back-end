'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            billingAddress: DataTypes.STRING,
            roleId: DataTypes.STRING,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'User',
        },
    );
    return User;
};
