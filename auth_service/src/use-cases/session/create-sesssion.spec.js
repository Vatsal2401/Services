const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeCreateSession = require('./create-session');
const sandbox = sinon.createSandbox();
const exceptions=require("../../exceptions")
const sessionsDb = {
  createSession: () => {
  },
};


const createSessionStub = sandbox.stub(sessionsDb, 'createSession');
createSessionStub.callsFake((args) => {
  expect(args).deep.equal({
    user_id: this.user_id,
    jwt_token: this.jwt_token,
    session_id: this.session_id,
    user_agent:this.user_agent,
    device: this.device,
    city: this.city,
    state: this.state,
    country:this.country,
    ip_address:this.ip_address
  });
  return {id: 1};
});

After(() => {
  this.user_id = undefined;
  this.jwt_token = undefined;
  this.session_id = undefined;
  this.sessionDetailsByEmail = undefined;
  this.result = undefined;
  this.error = undefined;
  this.user_agent=undefined;
  this.device    =undefined;
  this.city      =undefined;
  this.state     =undefined;
  this.country   =undefined;
  this.ip_address=undefined
  sandbox.resetHistory();
});

Given('Session details user_id: {string}, jwt_token: {string}, session_id: {string},user_agent: {string},device: {string},ip_address: {string},city: {string},state: {string} and country: {string} to create new session',
    ( user_id,jwt_token,session_id,user_agent,device ,ip_address, city, state,country) => {
        this.user_id=user_id || undefined,
        this.jwt_token=jwt_token || undefined,
        this.session_id=session_id || undefined
        this.user_agent=user_agent || undefined,
        this.device=device  || undefined
        this.city=city || undefined,
        this.state=state || undefined,
        this.country=country || undefined,
        this.ip_address=ip_address||undefined
    }
);

When('Try to create new session', async () => {
  const createSession = makeCreateSession({
    Joi,
    createSession: sessionsDb.createSession,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
  });

  try {
    this.result = await createSession({
        user_id: this.user_id,
        jwt_token: this.jwt_token,
        session_id: this.session_id,
        user_agent:this.user_agent,
        device: this.device,
        ip_address:this.ip_address,
        city: this.city,
        state: this.state,
        country:this.country,
        
      });
  } catch (e) {
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error: {string} with message: "{string}" while creating new session', (error, message) => {

  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will create new session with details: "{string}"', (newSessionDetails) => {
    console.log(this.result);
    console.log(newSessionDetails);
  expect(this.result).deep.equal(JSON.parse(newSessionDetails));
});

// Then('GetSessionDetailByEmail function will call {int} time while creating new session',
//     (getSessionDetailByEmailFunctionCallCount) => {
//       sinon.assert.callCount(getSessionDetailByEmailStub, getSessionDetailByEmailFunctionCallCount);
//     },
// );

// Then('getSessionDetailByMobile function will call {int} time while creating new session',
//     (getSessionDetailByMobileFunctionCallCount) => {
//       sinon.assert.callCount(getSessionDetailByMobileStub, getSessionDetailByMobileFunctionCallCount);
//     },
// );

// Then('encryptPassword function will call {int} time while creating new session',
//     (encryptPasswordFunctionCallCount) => {
//       sinon.assert.callCount(encryptPasswordStub, encryptPasswordFunctionCallCount);
//     },
// );

// Then('createSession function will call {int} time while creating new session',
//     (createSessionFunctionCallCount) => {
//       sinon.assert.callCount(createSessionStub, createSessionFunctionCallCount);
//     },
// );
