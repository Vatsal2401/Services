'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('employee', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:Sequelize.literal('gen_random_uuid()')
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    position:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    company_id:{
      type: Sequelize.UUID,
      allowNull: false,
    }
  })}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('employee');
}

module.exports = { up, down };