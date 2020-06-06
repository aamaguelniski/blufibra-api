'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('clientes', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        endereco: {
          type: Sequelize.STRING(128),
          allowNull: false
        },
        cep:{
          type: Sequelize.STRING(10),
          allowNull: false,
        }, 
        referencia: {
          type: Sequelize.STRING(128),
          allowNull: true,
        },
        telefone: {
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true,          
        },
        email: {
          type: Sequelize.STRING(64),
          allowNull: true,
          unique: true,
        },
        celular: {
          type: Sequelize.STRING(14),
          allowNull: true,
          unique: true,
        },
        id_usuario: {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuarios',
            key: 'id'
          }
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
      return queryInterface.dropTable('clientes');
  }
};
