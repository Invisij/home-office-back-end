'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'admin@gmail.com',
                password: '123@abc',
                firstName: 'John',
                lastName: 'Smith',
                phoneNumber: '0987654321',
                billingAddress: 'Ha Noi',
                roleId: 'R1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
