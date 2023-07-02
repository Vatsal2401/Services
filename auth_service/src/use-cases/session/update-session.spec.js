const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeUpdateSession=require("./update-session-expirytime")
const exceptions=require("../../exceptions")
const sandbox = sinon.createSandbox();

const sessionDb = {
    updateSessionExpiryTime: () => {
  }
};


const updateSessionExpiryTimeStub = sandbox.stub(sessionDb, 'updateSessionExpiryTime');
updateSessionExpiryTimeStub.callsFake((args) => {
  expect(args).deep.equal({session_id:this.sessionId});
  return 'update session successfully';
});



After(() => {
  this.sessionId  =undefined;
  this.result  = undefined;
  this.error   = undefined;
  this.sessionResult = undefined;
  sandbox.resetHistory();
});

Given('Session details sessionId:{string} to update session', async  (sessionId) => {
      this.sessionId = sessionId || undefined;
    }
);
When('Try to update session', async () => {
if(this.sessionId){
    this.sessionId=this.sessionId
}
 const updateSessionById= makeUpdateSession({
    updateSessionExpiryTime:sessionDb.updateSessionExpiryTime,ForbiddenError:exceptions.forbiddenError,Joi,ValidationError:exceptions.ValidationError
 })
  try {
    this.result = await updateSessionById({session_id:this.sessionId});
    console.log(this.result);
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error:{string} with message:"{string}" while updating session', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message
    });
  }); 
Then('update session successfully message:{string}', (details) => {
  expect(this.result).equal(details);
});

