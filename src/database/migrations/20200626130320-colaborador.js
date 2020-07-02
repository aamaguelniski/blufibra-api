'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('colaborador', 
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(128),
          allowNull: false,
          unique: true,
        },
        celular: {
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('colaborador');
  }
};
