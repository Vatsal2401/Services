const {Given, When, Then,After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeCreateRole = require('./create-role');
const sandbox = sinon.createSandbox();
const exceptions=require("../../exceptions")
const rolesDb = {
  createRole: () => {
  },
  assignRole:()=>{
  }
};

const createRoleStub = sandbox.stub(rolesDb, 'createRole');
createRoleStub.callsFake((args) => {
  expect(args).deep.equal({
    companyId: this.companyId,
    permission: this.permission,
    isMaster: this.isMaster,
    name:this.name,
  });
  return {id: 1};
});
const asignRoleStub = sandbox.stub(rolesDb, 'assignRole');
asignRoleStub.callsFake((args) => {
  expect(args).deep.equal({
    roleId: this.roleId,
    employeeId: this.employeeId
  });
  return {id: 1};
});
After(() => {
  this.companyId = undefined;
  this.permission = undefined;
  this.isMaster = undefined;
  this.name = undefined;
  this.result = undefined;
  this.error = undefined;
  this.employeeId=undefined;
  sandbox.resetHistory();
});

Given('Role details companyId:{string},permission:{string},isMaster:{string},name:{string},employeeId:{string} to create new role',
    ( companyId,permission,isMaster,name,employeeId) => {
        this.companyId=companyId || undefined,
        this.permission=permission || undefined,
        this.isMaster=isMaster || undefined
        this.name=name || undefined,
        this.employeeId=employeeId  || undefined
    }
);

When('Try to create new role', async () => {
  const createRole = makeCreateRole({
    Joi,
    assignRole:rolesDb.assignRole,
    createRole: rolesDb.createRole,
    ObjectAlreadyExistError:exceptions.objectAlreadyExistError,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
  });

  try {
    this.result = await createRole({
        companyId: this.companyId,
        permission: this.permission,
        isMaster: this.isMaster,
        name:this.name,
        employeeId: this.employeeId
      });
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error: {string} with message: "{string}" while creating new role', (error, message) => {

  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will create new role with details: "{string}"', (newRoleDetails) => {
    console.log(this.result);
    console.log(newRoleDetails);
  expect(this.result).deep.equal(JSON.parse(newRoleDetails));
});

// Then('GetRoleDetailByEmail function will call {int} time while creating new role',
//     (getRoleDetailByEmailFunctionCallCount) => {
//       sinon.assert.callCount(getRoleDetailByEmailStub, getRoleDetailByEmailFunctionCallCount);
//     },
// );

// Then('getRoleDetailByMobile function will call {int} time while creating new role',
//     (getRoleDetailByMobileFunctionCallCount) => {
//       sinon.assert.callCount(getRoleDetailByMobileStub, getRoleDetailByMobileFunctionCallCount);
//     },
// );

// Then('encryptPassword function will call {int} time while creating new role',
//     (encryptPasswordFunctionCallCount) => {
//       sinon.assert.callCount(encryptPasswordStub, encryptPasswordFunctionCallCount);
//     },
// );

// Then('createRole function will call {int} time while creating new role',
//     (createRoleFunctionCallCount) => {
//       sinon.assert.callCount(createRoleStub, createRoleFunctionCallCount);
//     },
// );
