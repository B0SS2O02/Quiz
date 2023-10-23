'use strict';
const { queryInterface, Sequelize } = require('sequelize')
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Tests', [{
      Name: 'Test1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tests', null, {});
  }
};
