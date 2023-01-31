'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Flavio foa',
        email: 'foa@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luiza',
        email: 'luiza@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cristina Doe',
        email: 'cristina@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Renata Brito',
        email: 'renata@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Erick Brito',
        email: 'erick@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rogerio santos',
        email: 'rogerio@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedro Doe',
        email: 'pedro@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jorge Doe',
        email: 'jorge@exemple.com',
        password: '12345678',
        telephone: '22999999999',
        cpf: '09090990921',
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
