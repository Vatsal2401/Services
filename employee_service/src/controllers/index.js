const employeeController=require("./employee")
const gcpController=require("./gcp")
const controller = Object.freeze({
    employeeController,
    gcpController
  });
  module.exports=controller;