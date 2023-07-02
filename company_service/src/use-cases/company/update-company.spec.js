const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeUpdateCompanyById=require("./updateCompany")
const exceptions=require("../../exceptions")
const sandbox = sinon.createSandbox();

const companyDb = {
  updateCompanyById: () => {
  },
  isCompanyExist:()=>{
  }
};

const isCompanyExistsStub = sandbox.stub(companyDb, 'isCompanyExist');
isCompanyExistsStub.callsFake((args) => {

  expect(args).deep.equal({
    companyId: this.companyId
  });
  if( this.companyId==50)
        return [];
  return [
    {
        companyid: 1,
        name: 'aaaaaaaaa',
        email: 'aaaaaaa@gmail.com',
        password: 'aaaaaaaaaa12345'
    }]
  ;
});
const updateCompanyByIdStub = sandbox.stub(companyDb, 'updateCompanyById');
updateCompanyByIdStub.callsFake((args) => {
  const id=this.companyId
  const companydata={
    name:this.name
  }
  expect(args).deep.equal({
    companydata,
    id: id
  });
  return 'update company successfully';
});



After(() => {
  this.name    =undefined
  this.companyId  =undefined;
  this.result  = undefined;
  this.error   = undefined;
  this.companyResult = undefined;
  sandbox.resetHistory();
});

Given('Company details name:{string} companyId: {string} to update company', async  (name,companyId) => {
      console.log(companyId);
      this.name=name||undefined
      this.companyId = companyId || undefined;
    }
);
Given('Third Enter companyid: {int} and updated companyname: {string} for update a company',
(companyid,name) => {
    this.name=name||undefined
    this.companyId = companyid || undefined;
},
);
Given('Second Enter companyid: {int} and updated companyname: {int} for updating a company',
    (companyid,uname) => {
        this.companyId=companyid || undefined;
        this.name=uname || undefined;
    },
);
When('Try to update company', async () => {
if(this.companyId){
    this.companyId=parseInt(this.companyId)
}
 const updateCompanyById= makeUpdateCompanyById({
    updateCompany:companyDb.updateCompanyById,
    Joi,
    isCompanyEmailExist:companyDb.isCompanyExist ,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
 })
  try {
    const companydata={
        name:this.name
      }
    this.result = await updateCompanyById({companydata,id:this.companyId});
    console.log(this.result);
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then("It will throw error: {string} with message: {string} while updating company", (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
  }); 
Then('update company successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

