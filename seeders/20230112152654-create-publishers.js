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
     await queryInterface.bulkInsert('publishers', 
     [
      {id:"201",name:"Valve",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"202",name:"EA Sports",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"203",name:"Ubisoft",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"204",name:"Microsoft",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"205",name:"SEGA",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"206",name:"Sony",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"207",name:"KONAMI",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"208",name:"Blizzard Entertainment",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')}
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Publishers', null, {});
  }
};
