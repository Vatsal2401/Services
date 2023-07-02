const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeUpdateEmployee=require("./update-employee")
const sandbox = sinon.createSandbox();
const exceptions=require("../../exceptions")
const employeeDb = {
  updateEmployee: () => {
  },
};

const updateEmployeeStub = sandbox.stub(employeeDb, 'updateEmployee');
updateEmployeeStub.callsFake((args) => {
  expect(args).deep.equal({company_id:this.company_id,employeeEmail:this.email,employeeId:this.id,employeeName:this.name,employeePossition:this.position,is_verified:this.is_verified,password:this.password});
  return 'update employee successfully';
});



After(() => {
  this.id=undefined 
  this.email = undefined;
  this.password = undefined;
  this.position =undefined;
  this.company_id = undefined;
  this.is_verified = undefined;
  this.name    =undefined
  this.result  = undefined;
  this.error   = undefined;
  this.employeeResult = undefined;
  sandbox.resetHistory();
});

Given('Employee details id:{string},name:{string},email:{string},password:{string},position:{string},company_id:{string},is_verified:{string} to update employee', async  (id,name,email,password,position,company_id,is_verified) => {
     this.id=id||undefined 
     this.name=name||undefined
      this.email = email || undefined;
      this.password = password || undefined;
      this.position = position || undefined;
      this.company_id = company_id || undefined;
      this.is_verified = is_verified || undefined;
    }
);
When('Try to update employee', async () => {

 const updateEmployee= makeUpdateEmployee({
    updateEmployee:employeeDb.updateEmployee,
    Joi,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
 })
  try {
    this.result = await updateEmployee({company_id:this.company_id,employeeEmail:this.email,employeeId:this.id,employeeName:this.name,employeePossition:this.position,is_verified:this.is_verified,password:this.password});
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error: {string} with message: "{string}" while updating employee', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
  }); 
Then('update employee successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

