'use strict';

const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('employee_role_association', {
    role_id:{
      type: Sequelize.UUID,
      allowNull: false
    },
    employee_id: {
      type: Sequelize.UUID,
      allowNull: false
    }
  })
  await queryInterface.addConstraint('employee_role_association', {
    type: 'primary key',
    name: 'employee_role_association_pk',
    fields: ['role_id', 'employee_id'],
  });

}
async function down({ context: queryInterface }) {
	await queryInterface.dropTable('employee_role_association');
}
module.exports = { up, down };