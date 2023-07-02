'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('roles', {
    id:{
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:Sequelize.literal('gen_random_uuid()')
    },
    company_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    permission:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    name:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    is_master:{
      type:Sequelize.BOOLEAN,
      defaultValue:false
    }
  })}
async function down({ context: queryInterface }) {
	await queryInterface.dropTable('roles');
}

module.exports = { up, down };