const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const exceptions=require("../../exceptions")
const makeGetCompanyById=require("./getCompanyById")
const sandbox = sinon.createSandbox();

const companyDb = {
  getCompanyById: () => {
  },
  isCompanyExist:()=>{
  }
};

// const isCompanyExistsStub = sandbox.stub(companyDb, 'isCompanyExist');
// isCompanyExistsStub.callsFake((args) => {
//   expect(args).deep.equal({
//     companyId: this.companyId
//   });
//   return this.companyResult;
// });
const getCompanyByIdStub = sandbox.stub(companyDb, 'getCompanyById');
getCompanyByIdStub.callsFake((args) => {
  const id=this.companyId
  expect(args).deep.equal({
    id: id
  });
  return 'get company successfully';
});



After(() => {
  this.companyId  =undefined;
  this.result = undefined;
  this.error = undefined;
  this.companyResult = undefined;
  sandbox.resetHistory();
});
Given('Company details companyId: {int} to get company', async  (companyId) => {
      console.log(companyId);
      this.companyId = companyId || undefined;
    }
);
When('Try to get company', async () => {

 const getCompanyById= makeGetCompanyById({
    getCompanyById:companyDb.getCompanyById,
//   isCompanyExist:companyDb.isCompanyExist
ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
 })
  try {
    
    this.result = await getCompanyById({id:this.companyId});
    console.log(this.result);
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

// Then("It will throw error: {string} with message: {string} while getting company", (error, message) => {

//     expect(this.error).deep.equal({
//       name: error,
//       message,
//     });
//   });
  
Then('get company successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

