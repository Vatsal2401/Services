const makeSessionDb=require("./session.db")
const makeRoleDb=require("./role.db")
const {dbError}=require("../exceptions")
const makeEmployeeRoleAssociationDb=require("./employee_role_association.db")
const { Client } = require('pg')
const config =require("../config")
 
const client = new Client({
  host:config.cockroach.host,
  port: config.cockroach.port,
  database: config.cockroach.database,
  user: config.cockroach.username,
  password: config.cockroach.password,
  ssl: {
    rejectUnauthorized: false,
  }
})
 client.connect()
const sessionDb  = makeSessionDb({cockroach:client,dbError})
const roleDb     = makeRoleDb({cockroach:client,dbError})
const employeeRoleAssociationDb=makeEmployeeRoleAssociationDb({cockroach:client,dbError})
module.exports   = Object.freeze({
  sessionDb,
  roleDb,
  employeeRoleAssociationDb
})
