
module.exports = {
    up: async ({ context:queryInterface }) => {
      await queryInterface.sequelize.query(
        `ALTER TABLE employee ADD COLUMN is_verified boolean default(boolean 'FALSE');`
      );
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(
        `drop column is_verified from employee;`
      );},
  };