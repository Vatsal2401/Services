const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeLoginEmployee=require("./login-employee")
const exceptions=require("../../exceptions")
const sandbox = sinon.createSandbox();
const jwt=require('jsonwebtoken')
const uuid = require('uuid');
const jwtSecretKey='vatsalpatel'
const employeesDb = {
  isEmployeeExist: () => {
  },
  getRandomIpAndLocation: () => {
  },
};
const internalService={
    createSession:()=>{

    }
}
const isEmployeeExistStub = sandbox.stub(employeesDb, 'isEmployeeExist');
isEmployeeExistStub.callsFake((args) => {
  expect(args).deep.equal({
    email: this.email,
  });
  return [this.employeeDetailsByEmail];
});
const getRandomIpAndLocationStub = sandbox.stub(employeesDb, 'getRandomIpAndLocation');
getRandomIpAndLocationStub.callsFake((args) => {
  expect(args).deep.equal({
  });
  return [this.employeeDetailsByEmail];
});

const createSessionStub = sandbox.stub(internalService, 'createSession');
createSessionStub.callsFake((args) => {
  expect(args).deep.equal({employeedata});
  return {id: 1};
});

After(() => {
  this.device=undefined;
  this.email = undefined;
  this.password = undefined;
  this.employeeDetailsByEmail = undefined;
  this.result = undefined;
  this.device=undefined;
  this.error = undefined;

  sandbox.resetHistory();
});

Given('Employee details email:{string},password:{string},user_agent:{string},device:{string} to login employee',
    (email, password,user_agent,device) => {
      this.email = email || undefined;
      this.password = password || undefined;
      this.user_agent=user_agent||undefined;
      this.device=device||undefined;
    }
);
// Given('Already existed employee details: {string} with same email', (employeeDetailsByEmail) => {
//   this.employeeDetailsByEmail = JSON.parse(employeeDetailsByEmail);
// });

When('Try to login employee', async () => {
const loginEmployee=makeLoginEmployee({
    createSession:internalService.createSession,ForbiddenError:exceptions.forbiddenError,getRandomIpAndLocation:employeesDb.getRandomIpAndLocation,isEmployeeExist:employeesDb.isEmployeeExist,Joi,jwt,jwtSecretKey,uuid,ValidationError:exceptions.ValidationError
})
  try {
    this.result = await loginEmployee({device:this.device,employeeEmail:this.email,employeePassword:this.password,user_agent:this.user_agent});
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('Throw error: {string} with message: "{string}" while logging a employee', (error, message) => {
  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will login employee with details: "{string}"', (newEmployeeDetails) => {
  expect(this.result).deep.equal(JSON.parse(newEmployeeDetails));
});

