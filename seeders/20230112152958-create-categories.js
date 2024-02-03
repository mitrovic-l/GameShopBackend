'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('categories', 
     [
      {id:"301",type:"Racing",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"302",type:"Action",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"303",type:"Adventure",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"304",type:"Sports",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"305",type:"Puzzle",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"306",type:"FPS",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"307",type:"Horror",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')}
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
