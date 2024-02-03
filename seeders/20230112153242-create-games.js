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
     await queryInterface.bulkInsert('games', 
     [
      {id:"401",title:"PES 2023",year:"2022",price:"24.99",info:"Professional Evolution Soccer 2023 by KONAMI.",publisher_game:"207",category_game:"304",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"402",title:"FIFA 23",year:"2022",price:"49.99",info:"Featuring FIFA Ultimate Team and Qatar World Cup playmode.",publisher_game:"202",category_game:"304",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"403",title:"F1 2021",year:"2021",price:"77.99",info:"Official video game of the 2021 Formula 1 and Formula 2 Championships.",publisher_game:"202",category_game:"301",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"404",title:"CS Global-Offensive",year:"2014",price:"10.99",info:"First-Person Shooter game by Valve.",publisher_game:"201",category_game:"306",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"405",title:"Diablo III",year:"2012",price:"9.89",info:"Hack-and-slash action role-playing game.",publisher_game:"208",category_game:"302",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"406",title:"Bloodborne",year:"2015",price:"14.59",info:"Action role-playing game, multiplayer.",publisher_game:"206",category_game:"302",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},
      {id:"407",title:"Left 4 Dead 2",year:"2009",price:"4.99",info:"Multiplayer FPS game published by Valve (creators of Half-Life and Counter Strike) in 2009.",publisher_game:"201",category_game:"306",createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')},

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
