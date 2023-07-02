'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('sessions', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    jwt_token:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    start_time:{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_active:{
      type:Sequelize.BOOLEAN,
      defaultValue:true
    },
    expiration_time:{
      type:Sequelize.STRING,
      // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_agent:{
      type:Sequelize.STRING
    },
    device:{
      type:Sequelize.STRING
    },
    ip_address:{
      type:Sequelize.STRING
    },
    city:{
      type:Sequelize.STRING
    },
    state:{
      type:Sequelize.STRING
    },
    country:{
      type:Sequelize.STRING
    }
  })}
async function down({ context: queryInterface }) {
	await queryInterface.dropTable('sessions');
}

module.exports = { up, down };