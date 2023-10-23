'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Check: {
        type: Sequelize.BOOLEAN
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};
