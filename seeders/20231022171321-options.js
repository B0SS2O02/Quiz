'use strict';
const { queryInterface, Sequelize } = require('sequelize')
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Options', [{
      Option: 'answer 1',
      QuestionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 2',
      QuestionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 3',
      QuestionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 4',
      QuestionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 5',
      QuestionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 6',
      QuestionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 7',
      QuestionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Option: 'answer 8',
      QuestionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Options', null, {});
  }
};
