'use strict';
const Sequelize = require("sequelize");
const config =require("./config")
const { Umzug, SequelizeStorage } = require('umzug');
 const sequelize = new Sequelize(config.cockroach.database,config.cockroach.username,config.cockroach.password, { 
  dialect: 'postgres',
  host: config.cockroach.host,
  port: config.cockroach.port,
  logging: false,
  dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
 });
const umzug = new Umzug({
    migrations: { glob: 'migrations-cockroach/*.js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});
(async () => {
  console.log("running");
    await umzug.up();
})();



