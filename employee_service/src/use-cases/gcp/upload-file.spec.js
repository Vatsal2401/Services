const {Given, When, Then, After} = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const makeSendEmail = require('./sendEmail');

const sandbox = sinon.sendSandbox();

const storage = {
  bucket: () => {
  },
};
const bucket={
    upload:()=>{

    }
}
const bucketStub = sandbox.stub(storage, 'storage');
bucketStub.callsFake((args) => {
  expect(args).deep.equal({emaildata});
  return bucket;
});
const uploadStub = sandbox.stub(storage, 'bucket');
uploadStub.callsFake((args) => {
  expect(args).deep.equal({emaildata});
  return 'successfull';
});

After(() => {
  this.name = undefined;
  this.email = undefined;
  this.password = undefined;
  this.emailDetailsByEmail = undefined;
  this.result = undefined;
  this.error = undefined;

  sandbox.resetHistory();
});

Given('Email details name: {string}, email: {string}, and password: {string} to send new email',
    (name, email, password) => {
      this.name = name || undefined;
      this.email = email || undefined;
      this.password = password || undefined;
    }
);

Given('Already existed email details: "{string}" with same email', (emailDetailsByEmail) => {
  // console.log(this.emailDetailsByEmail);
  this.emailDetailsByEmail = JSON.parse(emailDetailsByEmail);
  
});

// Given('Already existed email details: "{string}" with same mobile', (emailDetailsByMobile) => {
//   this.emailDetailsByMobile = JSON.parse(emailDetailsByMobile);
// });

// Given('Encrypted password of provided password is: {string}', (encryptedPassword) => {
//   this.encryptedPassword = encryptedPassword;
// });

When('Try to send new email', async () => {
  const sendEmail = makeSendEmail({
    Joi,
    sendEmail: emailDb.sendEmail,
    ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
  });

  try {
    const emaildata={
      name: this.name,
      email: this.email,
      password: this.password,
    }
    this.result = await sendEmail({emaildata});
    // console.log(this.result);
  } catch (e) {
    // console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then('It will throw error: {string} with message: "{string}" while creating new email', (error, message) => {

  expect(this.error).deep.equal({
    name: error,
    message,
  });
});

Then('It will send new email with details: "{string}"', (newEmailDetails) => {
  expect(this.result).deep.equal(JSON.parse(newEmailDetails));
});

// Then('GetEmailDetailByEmail function will call {int} time while creating new email',
//     (getEmailDetailByEmailFunctionCallCount) => {
//       sinon.assert.callCount(getEmailDetailByEmailStub, getEmailDetailByEmailFunctionCallCount);
//     },
// );

// Then('getEmailDetailByMobile function will call {int} time while creating new email',
//     (getEmailDetailByMobileFunctionCallCount) => {
//       sinon.assert.callCount(getEmailDetailByMobileStub, getEmailDetailByMobileFunctionCallCount);
//     },
// );

// Then('encryptPassword function will call {int} time while creating new email',
//     (encryptPasswordFunctionCallCount) => {
//       sinon.assert.callCount(encryptPasswordStub, encryptPasswordFunctionCallCount);
//     },
// );

// Then('sendEmail function will call {int} time while creating new email',
//     (sendEmailFunctionCallCount) => {
//       sinon.assert.callCount(sendEmailStub, sendEmailFunctionCallCount);
//     },
// );
