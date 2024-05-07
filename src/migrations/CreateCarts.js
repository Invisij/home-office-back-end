'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Carts', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            amount: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('Carts');
    },
};
