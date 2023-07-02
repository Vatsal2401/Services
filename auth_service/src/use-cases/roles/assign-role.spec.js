const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeAssignRole=require("./assign-role")
const sandbox = sinon.createSandbox();
const exceptions=require("../../exceptions")
const roleDb = {
  assignRole: () => {
  }
};
const assignRoleStub = sandbox.stub(roleDb, 'assignRole');
assignRoleStub.callsFake((args) => {
  expect(args).deep.equal({
    employeeId: this.employeeId,
    roleId    : this.roleId
  });
  return 'assign role successfully';
});

After(() => {
  this.roleId  =undefined;
  this.employeeId=undefined
  this.result = undefined;
  this.error = undefined;
  this.roleResult = undefined;
  sandbox.resetHistory();
});

Given('Role details roleId:{string},employeeId:{string} to assign role', async  (roleId,employeeId) => {
      this.roleId = roleId || undefined;
      this.employeeId=employeeId||undefined;
    }
);

When('Try to assign role', async () => {

 const assignRole= makeAssignRole({assignRole:roleDb.assignRole,Joi,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,ValidationError:exceptions.ValidationError})
  try {
    this.result = await assignRole({employeeId:this.employeeId,roleId:this.roleId});
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then(`It will throw error: {string} with message: "{string}" while assigning role`, (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
  });

Then('It will assign role with details: "{string}"', (newRoleDetails) => {
  expect(this.result).equal(newRoleDetails);
});