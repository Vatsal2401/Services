// const config=require("../config")
const makeCompanyDb=require("./company.db")
const { Client } = require('pg')
 
const client = new Client({
  host: 'localhost',
  port: 26257,
  database: 'company_service',
  user: 'vatsal',
  password: 'cockroach',
  ssl: {
    rejectUnauthorized: false,
  },
})
// const client = new Client({
//   host: 'cockroachdb-0',
//   port: 26257,
//   database: 'company_service',
//   user: 'root',
//   ssl: false,
//   extra: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// })
 client.connect()
const companyDb           = makeCompanyDb({cockroach:client})
module.exports=Object.freeze({
    companyDb
})
