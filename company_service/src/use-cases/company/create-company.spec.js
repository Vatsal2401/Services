const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const exceptions =require("../../exceptions")
const makeCreateCompany = require('./createCompany');
const sandbox = sinon.createSandbox();
const companyDb = {
  isCompanyExist: () => {
  },
  createCompany: () => {
  },
};
const isCompanyExistsStub = sandbox.stub(companyDb, 'isCompanyExist');
isCompanyExistsStub.callsFake((args) => {
  expect(args).deep.equal({
    companyName: this.name,
  });
  if (this.name=="RapidOps") {
    return [this.companyDetailsByName];
  }
 return false
});
const createCompanyStub = sandbox.stub(companyDb, 'createCompany');
createCompanyStub.callsFake((args) => {
  expect(args).deep.equal({companyName: this.name});
  return {id: 1};
});

After(() => {
  this.name = undefined;
  this.companyDetailsByName = undefined;
  this.result = undefined;
  this.error = undefined;
  sandbox.resetHistory();
});

Given('Company details name: {string} to create new company',
    (name) => {
      this.name = name || undefined;
    }
);

Given('Already existed company details: "{string}" with same name', (companyDetailsByName) => {
  // console.log(this.userDetailsByEmail);
  this.companyDetailsByName = JSON.parse(companyDetailsByName);
  
});
When('Try to create new company', async () => {
  const createCompany = makeCreateCompany({
    Joi,
    createCompany: companyDb.createCompany,
    getCompanyIdByName:companyDb.isCompanyExist,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
  });

  try {
    this.result = await createCompany({companyName:this.name});
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error: {string} with message: "{string}" while creating new company', (error, message) => {
 
  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will create new company with details: "{string}"', (newCompanyDetails) => {
  expect(this.result).deep.equal(JSON.parse(newCompanyDetails));
});