const {DbError}=require("../exceptions")
const makeEmployeeDb=require("./employee.db")
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
  },
})
 client.connect()
const employeeDb           = makeEmployeeDb({cockroach:client,DbError})
module.exports=Object.freeze({
    employeeDb
})
