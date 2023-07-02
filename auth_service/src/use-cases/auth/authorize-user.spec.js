const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeUpdateEmployeeById=require("./updateEmployee")
const sandbox = sinon.createSandbox();

const employeeDb = {
  updateEmployeeById: () => {
  },
  isEmployeeExist:()=>{
  }
};

const isEmployeeExistsStub = sandbox.stub(employeeDb, 'isEmployeeExist');
isEmployeeExistsStub.callsFake((args) => {

  expect(args).deep.equal({
    employeeId: this.employeeId
  });
  if( this.employeeId==50)
        return [];
  return [
    {
        employeeid: 1,
        name: 'aaaaaaaaa',
        email: 'aaaaaaa@gmail.com',
        password: 'aaaaaaaaaa12345'
    }]
  ;
});
const updateEmployeeByIdStub = sandbox.stub(employeeDb, 'updateEmployeeById');
updateEmployeeByIdStub.callsFake((args) => {
  const id=this.employeeId
  const employeedata={
    name:this.name
  }
  expect(args).deep.equal({
    employeedata,
    id: id
  });
  return 'update employee successfully';
});



After(() => {
  this.name    =undefined
  this.employeeId  =undefined;
  this.result  = undefined;
  this.error   = undefined;
  this.employeeResult = undefined;
  sandbox.resetHistory();
});

Given('Employee details name:{string} employeeId: {string} to update employee', async  (name,employeeId) => {
      console.log(employeeId);
      this.name=name||undefined
      this.employeeId = employeeId || undefined;
    }
);
Given('Third Enter employeeid: {int} and updated employeename: {string} for update a employee',
(employeeid,name) => {
    this.name=name||undefined
    this.employeeId = employeeid || undefined;
},
);
Given('Second Enter employeeid: {int} and updated employeename: {int} for updating a employee',
    (employeeid,uname) => {
        this.employeeId=employeeid || undefined;
        this.name=uname || undefined;
    },
);
When('Try to update employee', async () => {
if(this.employeeId){
    this.employeeId=parseInt(this.employeeId)
}
 const updateEmployeeById= makeUpdateEmployeeById({
    updateEmployee:employeeDb.updateEmployeeById,
    Joi,
    isEmployeeEmailExist:employeeDb.isEmployeeExist ,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
 })
  try {
    const employeedata={
        name:this.name
      }
    this.result = await updateEmployeeById({employeedata,id:this.employeeId});
    console.log(this.result);
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then("It will throw error: {string} with message: {string} while updating employee", (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
  }); 
Then('update employee successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

