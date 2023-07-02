const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const jwt=require('jsonwebtoken')
const jwtSecretKey='vatsalpatel'
const expect = require('chai').expect;
const Joi = require('joi');
const makeLogoutSession=require("./logout-session")
const exceptions=require("../../exceptions")
const sandbox = sinon.createSandbox();

const sessionDb = {
    logoutSession: () => {
  }
};
const logoutSessionStub = sandbox.stub(sessionDb, 'logoutSession');
logoutSessionStub.callsFake((args) => {
  expect(args).deep.equal({session_id:this.sessionId});
  return 'logout session successfully';
});

After(() => {
  this.sessionId  =undefined;
  this.result  = undefined;
  this.error   = undefined;
  this.sessionResult = undefined;
  sandbox.resetHistory();
});

Given('Session details sessionId:{string} to logout session', async  (sessionId) => {
      this.sessionId = sessionId || undefined;
    }
);
When('Try to logout session', async () => {
if(this.sessionId){
    this.sessionId=this.sessionId
}
 const logoutSessionf= makeLogoutSession({
    jwt,jwtSecretKey,logoutSession:sessionDb.logoutSession,ForbiddenError:exceptions.forbiddenError,Joi,ValidationError:exceptions.ValidationError
 })
  try {
    this.result = await logoutSessionf({session_id:this.sessionId});
    console.log(this.result);
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error:{string} with message:"{string}" while logout session', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message
    });
  }); 
Then('logout session successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

