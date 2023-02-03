'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      propertieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Properties', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};
