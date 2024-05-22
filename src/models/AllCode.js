'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class AllCode extends Model {
        static associate(models) {}
    }
    AllCode.init(
        {
            key: DataTypes.STRING,
            type: DataTypes.STRING,
            value: DataTypes.STRING,
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'AllCode',
        },
    );
    return AllCode;
};
