'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [
            {
                id: uuidv4(),
                email: 'test@gmail.com',
                password: '123@abc',
                role: 'USER',
                firstName: 'John',
                lastName: 'Smith',
                phoneNumber: '0987654321',
                address: 'Ha Noi',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    },
};
