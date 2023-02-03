'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images',
      [
        {
          url: 'www.exemple1.com.br',
          propertieId: 1
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 1
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 2
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 2
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 3
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 3
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 4
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 4
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 5
        },
        {
          url: 'www.exemple1.com.br',
          propertieId: 5
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
