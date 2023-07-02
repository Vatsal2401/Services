// const {Given, When, Then, After} = require('@cucumber/cucumber');
// const sinon = require('sinon');
// const expect = require('chai').expect;
// const Joi = require('joi');
// const makeGetRoleById=require("./get-role-by-id")
// const sandbox = sinon.createSandbox();
// const exceptions=require("../../exceptions")
// const roleDb = {
//   getAllRole: () => {
//   },
// };

// const getAllRoleStub = sandbox.stub(roleDb, 'getAllRole');
// getAllRoleStub.callsFake((args) => {
//   expect(args).deep.equal({
//   });
//   return 'get role successfully';
// });



// After(() => {
//   this.roleId  =undefined;
//   this.result = undefined;
//   this.error = undefined;
//   this.roleResult = undefined;
//   sandbox.resetHistory();
// });
// Given('Role details roleId: {string} to get role', async  (roleId) => {
//       this.roleId = roleId || undefined;
//     }
// );
// When('Try to get role', async () => {

//  const getRoleById= makeGetRoleById({getRoleById:roleDb.getRoleById,Joi,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,ValidationError:exceptions.ValidationError})
//   try {
//     this.result = await getRoleById({id:this.roleId});
//   } catch (e) {
//     console.log(e);
//     this.error = {
//       name: e.name,
//       message: e.message,
//     };
//   }
// });

// Then(`It will throw error: {string} with message: "{string}" while getting role`, (error, message) => {

//     expect(this.error).deep.equal({
//       name: error,
//       message,
//     });
//   });
  
// Then('get role successfully message:{string}', (details) => {
//   expect(this.result).equal(details);
// });

