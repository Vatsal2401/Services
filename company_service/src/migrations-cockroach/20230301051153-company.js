'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('company', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:Sequelize.literal('gen_random_uuid()')
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('company');
}

module.exports = { up, down };