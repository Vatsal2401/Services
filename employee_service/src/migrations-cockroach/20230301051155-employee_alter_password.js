
module.exports = {
    up: async ({ context:queryInterface }) => {
      await queryInterface.sequelize.query(
        `ALTER TABLE employee ADD COLUMN password VARCHAR(255) default('default');`
      );
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(
        `drop column password from employee;`
      );},
  };