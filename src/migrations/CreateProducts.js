'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            subCatId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'SubCats',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            discountId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Discounts',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1, 255],
                },
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    min: 0,
                },
            },
            sku: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: [1, 100],
                },
            },
            image: {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: [1, 50],
                },
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    min: 0,
                },
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
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
        await queryInterface.dropTable('Products');
    },
};
