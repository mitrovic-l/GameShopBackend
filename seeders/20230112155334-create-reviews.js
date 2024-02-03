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
   await queryInterface.bulkInsert('reviews', [
    {id:"501",text:"Amazed by this game.",rating:"10",user_review:"101",game_review:"402",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
    {id:"502",text:"Poor physics and gameplay, fifa23 is much better.",rating:"3",user_review:"101",game_review:"401",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
    {id:"503",text:"BEST FPS GAME ON THE MARKET!",rating:"10",user_review:"103",game_review:"404",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
    {id:"504",text:"Old school type of game, would rather play Valorant.",rating:"5",user_review:"104",game_review:"404",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
    {id:"505",text:"Stunning graphics and driving physics, cannot wait for the 2022 release.",rating:"9",user_review:"102",game_review:"403",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
    {id:"506",text:"A bit too old but still good and fun when csgo servers are down :)",rating:"7",user_review:"105",game_review:"407",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
    {id:"507",text:"LOVE PLAYING THIS ALL DAY, but wouldn't mind a minor update",rating:"8",user_review:"106",game_review:"405",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')}
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games', null, {});
  }
};
