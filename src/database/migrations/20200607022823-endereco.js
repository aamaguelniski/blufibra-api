'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('endereco', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        endereco: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        numero: {
          type: Sequelize.INTEGER,
        },
        bairro: {
          type: Sequelize.STRING(128),
        },
        cep: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        referencia: {
          type: Sequelize.STRING(255),
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
      return queryInterface.dropTable('endereco');
  }
};
