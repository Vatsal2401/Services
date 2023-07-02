const Joi =require('joi')
const makeEmployeeTableEntity = require("./employee-Table-Entity")
const employeeTable= makeEmployeeTableEntity({Joi});
// console.log(employeeTable);
module.exports=Object.freeze({
    employeeTable
  });