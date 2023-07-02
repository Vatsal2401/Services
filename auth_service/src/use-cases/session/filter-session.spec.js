const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeFilterSession=require("./filter-session")
const exceptions=require("../../exceptions")
const sandbox = sinon.createSandbox();

const sessionDb = {
    filterSession: () => {
  }
};


const filterSessionStub = sandbox.stub(sessionDb, 'filterSession');
filterSessionStub.callsFake((args) => {
  expect(args).deep.equal({session_id:this.sessionId});
  return 'filter session successfully';
});



After(() => {
  this.sessionId  =undefined;
  this.result  = undefined;
  this.error   = undefined;
  this.sessionResult = undefined;
  sandbox.resetHistory();
});

Given('Session details sessionId:{string} to filter session', async  (sessionId) => {
      this.sessionId = sessionId || undefined;
    }
);
When('Try to filter session', async () => {
if(this.sessionId){
    this.sessionId=this.sessionId
}
 const filterSession= makeFilterSession({
    filterSession:sessionDb.filterSession,ForbiddenError:exceptions.forbiddenError,Joi,ValidationError:exceptions.ValidationError
 })
  try {
    this.result = await filterSession({session_id:this.sessionId});
    console.log(this.result);
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error:{string} with message:"{string}" while filtering session', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message
    });
  }); 
Then('filter session successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

