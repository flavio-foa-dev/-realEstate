'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images',
      [
        {
          url: 'www.exemple1.com.br',
          propertieId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
