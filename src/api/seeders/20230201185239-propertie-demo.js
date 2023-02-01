'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Properties',
      [
        {
          ownerId: 1,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          price: 20.000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 1,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          price: 20.000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 2,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          price: 20.000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 3,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          price: 20.000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 4,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          price: 20.000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Properties', null, {});
  }
};
