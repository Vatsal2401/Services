const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const exceptions=require("../../exceptions")
const makedeleteRole = require('./delete-role');
const sandbox = sinon.createSandbox();
const roleDb = {
    deleteRole: () => {
    },
    isRoleExist:()=>{
    }
  };
  
Before(() => {
    this.roleId = undefined;
    this.result = undefined;
    this.error = undefined;
  
    sandbox.resetHistory();
  });

const deleteRoleStub = sandbox.stub(roleDb,'deleteRole');
deleteRoleStub.callsFake(({roleId}) => {
    return "Deleted the role succesfully"
});
const isRoleExistStub = sandbox.stub(roleDb,'isRoleExist');
isRoleExistStub.callsFake(({roleId}) => {
    return true
});

Given('Enter roleId: {string} to delete a role',
    (roleId) => {
        this.roleId=(roleId) || undefined;
    },
);
When('Try to delete a role', async ()=>{
    if(this.roleId){
        this.roleId=this.roleId;
    }
    const deleteRole = makedeleteRole({deleteRole:roleDb.deleteRole,isRoleExist:roleDb.isRoleExist,Joi,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,ValidationError:exceptions.ValidationError});
    try 
    {
        this.result = await deleteRole({
            id: this.roleId
          });
    } 
    catch (e) {
        this.error = {
          name: e.name,
          message: e.message,
        };
    }
});


Then('Throw error: {string} with message: "{string}" while deleting a role', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
});


Then('Show message: {string}', (message) => {
    expect(this.result).deep.equal(message);
});