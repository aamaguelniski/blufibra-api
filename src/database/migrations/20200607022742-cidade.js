'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('cidades', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        codigo_ibge: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
        },
        uf: {
          type: Sequelize.STRING(2),
          allowNull: false,
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
      return queryInterface.dropTable('cidades');
  }
};
