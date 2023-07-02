const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeCreateEmployee = require('./create-employee');
const exceptions=require("../../exceptions")
const sandbox = sinon.createSandbox();

const employeesDb = {
  isEmployeeEmailExist: () => {
  },
  createEmployee: () => {
  },
};
const internalService={
  getCompanyIdByName:()=>{
    
  }
}
const isEmployeeEmailExistsStub = sandbox.stub(employeesDb, 'isEmployeeEmailExist');
isEmployeeEmailExistsStub.callsFake((args) => {
  expect(args).deep.equal({
    employeeEmailId:this.email,
  });
  if(this.email=="vatsalpatel@rapidops.com")
  {
    return [this.employeeDetailsByEmail];
  }
  return false;
});
const getCompanyIdByNameStub = sandbox.stub(internalService, 'getCompanyIdByName');
getCompanyIdByNameStub.callsFake((args) => {
  expect(args).deep.equal({
    companyName:this.company
  });
  return this.company;
});
const createEmployeeStub = sandbox.stub(employeesDb, 'createEmployee');
createEmployeeStub.callsFake((args) => {
  expect(args).deep.equal({password:this.password,employeeName:this.name,employeeEmail:this.email,position:this.position
    ,company_id:this.company });
  return 'successfull';
});


After(() => {
  this.name = undefined;
  this.email = undefined;
  this.password = undefined;
  this.employeeDetailsByEmail = undefined;
  this.company=undefined;
  this.position=undefined;
  this.result = undefined;
  this.error = undefined;

  sandbox.resetHistory();
});

Given('Employee details name:{string},email:{string},password:{string},position:{string},company:{string} to create new employee',
    (name, email, password,position,company) => {
      this.name = name || undefined;
      this.email = email || undefined;
      this.position = position || undefined;
      this.company = company || undefined;
      this.password = password || undefined;
    }
);

Given('Already existed employee details: "{string}" with same email', (employeeDetailsByEmail) => {
  this.employeeDetailsByEmail = JSON.parse(employeeDetailsByEmail)
});

// Given('Already existed employee details: "{string}" with same mobile', (employeeDetailsByMobile) => {
//   this.employeeDetailsByMobile = JSON.parse(employeeDetailsByMobile);
// });

// Given('Encrypted password of provided password is: {string}', (encryptedPassword) => {
//   this.encryptedPassword = encryptedPassword;
// });

When('Try to create new employee', async () => {
  const createEmployee = makeCreateEmployee({
    Joi,
    createEmployee: employeesDb.createEmployee,
    isEmployeeExist:employeesDb.isEmployeeEmailExist,
    getCompanyIdByName:internalService.getCompanyIdByName,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
  });

  try {
   
    this.result = await createEmployee({company_name:this.company,employeeEmail:this.email,employeeName:this.name,password:this.password,position:this.position});
    console.log(this.result);
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('Throw error:{string} with message:{string} while creating a employee', (error, message) => {
  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will create new employee with details: {string}', (newEmployeeDetails) => {
  console.log(this.result,"tfcgvhjbk");
  expect(this.result).equal(newEmployeeDetails);
});

// Then('GetEmployeeDetailByEmail function will call {int} time while creating new employee',
//     (getEmployeeDetailByEmailFunctionCallCount) => {
//       sinon.assert.callCount(getEmployeeDetailByEmailStub, getEmployeeDetailByEmailFunctionCallCount);
//     },
// );

// Then('getEmployeeDetailByMobile function will call {int} time while creating new employee',
//     (getEmployeeDetailByMobileFunctionCallCount) => {
//       sinon.assert.callCount(getEmployeeDetailByMobileStub, getEmployeeDetailByMobileFunctionCallCount);
//     },
// );

// Then('encryptPassword function will call {int} time while creating new employee',
//     (encryptPasswordFunctionCallCount) => {
//       sinon.assert.callCount(encryptPasswordStub, encryptPasswordFunctionCallCount);
//     },
// );

// Then('createEmployee function will call {int} time while creating new employee',
//     (createEmployeeFunctionCallCount) => {
//       sinon.assert.callCount(createEmployeeStub, createEmployeeFunctionCallCount);
//     },
// );
