const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeUpdateRole=require("./update-role")
const sandbox = sinon.createSandbox();
const exceptions=require("../../exceptions")
const roleDb = {
  updateRole: () => {
  },
  isRoleExist:()=>{
  }
};

const updateRoleStub = sandbox.stub(roleDb, 'updateRole');
updateRoleStub.callsFake((args) => {
  expect(args).deep.equal({company_id:this.company_id,roleEmail:this.email,roleId:this.id,roleName:this.name,rolePossition:this.position,is_verified:this.is_verified,password:this.password});
  return 'update role successfully';
});
const isRoleExistStub = sandbox.stub(roleDb, 'isRoleExist');
isRoleExistStub.callsFake((args) => {
  expect(args).deep.equal({company_id:this.company_id,roleEmail:this.email,roleId:this.id,roleName:this.name,rolePossition:this.position,is_verified:this.is_verified,password:this.password});
  return 'update role successfully';
});

After(() => {
  this.companyId=undefined 
  this.permission = undefined;
  this.isMaster = undefined;
  this.name = undefined;
  this.roleId    =undefined
  this.result  = undefined;
  this.error   = undefined;
  this.roleResult = undefined;
  sandbox.resetHistory();
});

Given('Role details companyId:{string},permission:{string},isMaster:{string},name:{string},roleId:{string} to update role', async  (companyId,permission,isMaster,name,roleId) => {
      this.companyId=companyId||undefined 
      this.permission=permission||undefined
      this.isMaster = isMaster || undefined;
      this.name = name || undefined;
      this.roleId = roleId || undefined;
    }
);
When('Try to update role', async () => {

 const updateRole= makeUpdateRole({
    isRoleExist:roleDb.isRoleExist,
    updateRole:roleDb.updateRole,
    Joi,
    ObjectAlreadyExistError:exceptions.objectAlreadyExistError,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
 })
  try {
    this.result = await updateRole({companyId:this.companyId,isMaster:this.isMaster,name:this.name,permission:this.permission,roleId:this.roleId});
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error:{string} with message:"{string}" while updating role', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
  }); 
Then('update role successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

