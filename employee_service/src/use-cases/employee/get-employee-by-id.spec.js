const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeGetEmployeeById=require("./get-employee-by-id")
const sandbox = sinon.createSandbox();

const employeeDb = {
  getEmployeeById: () => {
  },
  isEmployeeExist:()=>{
  }
};

// const isEmployeeExistsStub = sandbox.stub(employeeDb, 'isEmployeeExist');
// isEmployeeExistsStub.callsFake((args) => {
//   expect(args).deep.equal({
//     employeeId: this.employeeId
//   });
//   return this.employeeResult;
// });
const getEmployeeByIdStub = sandbox.stub(employeeDb, 'getEmployeeById');
getEmployeeByIdStub.callsFake((args) => {
  const id=this.employeeId
  expect(args).deep.equal({
    id: id
  });
  return 'get employee successfully';
});



After(() => {
  this.employeeId  =undefined;
  this.result = undefined;
  this.error = undefined;
  this.employeeResult = undefined;
  sandbox.resetHistory();
});
Given('Employee details employeeId: {int} to get employee', async  (employeeId) => {
      console.log(employeeId);
      this.employeeId = employeeId || undefined;
    }
);
When('Try to get employee', async () => {

 const getEmployeeById= makeGetEmployeeById({
    getEmployeeById:employeeDb.getEmployeeById,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
//   isEmployeeExist:employeeDb.isEmployeeExist
 })
  try {
    
    this.result = await getEmployeeById({id:this.employeeId});
    console.log(this.result);
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

// Then("It will throw error: {string} with message: {string} while getting employee", (error, message) => {

//     expect(this.error).deep.equal({
//       name: error,
//       message,
//     });
//   });
  
Then('get employee successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

