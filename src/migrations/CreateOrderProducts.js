'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('OrderProducts', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            orderId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            productId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('OrderProducts');
    },
};
