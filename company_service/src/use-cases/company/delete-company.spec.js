const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeDeleteCompany=require("./deleteCompany")
const exceptions =require("../../exceptions")
const sandbox = sinon.createSandbox();
const employeeService={
  deleteAllEmployeeOfCompany:()=>{
  }
}
const companyDb = {
  deleteCompany: () => {
  },
  isCompanyExist:()=>{
  }
};
const deleteAllEmployeeOfCompanyStub = sandbox.stub(employeeService, 'deleteAllEmployeeOfCompany');
deleteAllEmployeeOfCompanyStub.callsFake((args) => {
  expect(args).deep.equal({
    companyId: this.companyId
  });
  return this.companyResult;
});
const isCompanyExistsStub = sandbox.stub(companyDb, 'isCompanyExist');
isCompanyExistsStub.callsFake((args) => {
  expect(args).deep.equal({
    companyId: this.companyId
  });
  return this.companyResult;
});
const deleteCompanyStub = sandbox.stub(companyDb, 'deleteCompany');
deleteCompanyStub.callsFake((args) => {
  expect(args).deep.equal({
    companyId:this.companyId
  });
  return 'delete company successfully';
});



After(() => {
  this.companyId  =undefined;
  this.result = undefined;
  this.error = undefined;
  this.companyResult = undefined;
  sandbox.resetHistory();
});

Given('Company details companyId: {int} to delete company', async  (companyId) => {
      console.log(companyId);
      this.companyId = companyId || undefined;
    }
);
Given('company id doesnt exist result:{int}', (result) => {
    this.companyResult = result; 
  });
When('Try to delete company', async () => {

 const deleteCompany= makeDeleteCompany({
  deleteCompany:companyDb.deleteCompany,
  isCompanyExist:companyDb.isCompanyExist,
  deleteAllEmployeeOfCompany:employeeService.deleteAllEmployeeOfCompany,
  ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
 })
  try {
    this.result = await deleteCompany({id:this.companyId});
    console.log(this.result);
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then("It will throw error: {string} with message: {string} while deleting company", (error, message) => {

  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will delete company with details: {string}', (details) => {
  expect(this.result).equal(details);
});

