'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Properties',
      [
        {
          ownerId: 1,
          active: true,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          description: 'Lindo imovel',
          price: 20.000
        },
        {
          ownerId: 1,
          active: true,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          description: 'Lindo imovel',
          price: 20.000
        },
        {
          ownerId: 2,
          active: true,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          description: 'Lindo imovel',
          price: 20.000
        },
        {
          ownerId: 3,
          active: true,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          description: 'Lindo imovel',
          price: 20.000
        },
        {
          ownerId: 4,
          active: true,
          type: 'casa',
          state: 'Rio de Janeiro',
          city: 'Araruama',
          district: 'Pontinha',
          status: 'a venda',
          buyerUser: null,
          description: 'Lindo imovel',
          price: 20.000
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Properties', null, {});
  }
};
