'use strict';
const { queryInterface, Sequelize } = require('sequelize')
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Questions', [{
      Title: 'question 1',
      Image: 'image',
      Answer: "answer 1",
      TestId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Title: 'question 2',
      Image: 'image',
      Answer: "answer 7",
      TestId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
