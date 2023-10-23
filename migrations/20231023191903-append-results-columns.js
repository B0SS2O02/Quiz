'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Results', 'UserId', {
      type: Sequelize.INTEGER
    })
    await queryInterface.addColumn('Results', 'TestId', {
      type: Sequelize.INTEGER
    })
    await queryInterface.addColumn('Results', 'QuestionId', {
      type: Sequelize.INTEGER
    })
    await queryInterface.addColumn('Results', 'OptionId', {
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Results', 'UserId')
    await queryInterface.removeColumn('Results', 'TestId')
    await queryInterface.removeColumn('Results', 'QuestionId')
    await queryInterface.removeColumn('Results', 'OptionId')
  }
};
