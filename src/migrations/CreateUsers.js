'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: [1, 50],
                },
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: [1, 50],
                },
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: [1, 15],
                },
            },
            billingAddress: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: [1, 255],
                },
            },
            roleId: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
