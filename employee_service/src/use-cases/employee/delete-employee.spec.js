const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const Joi = require('joi');
const exceptions=require("../../exceptions")
const makedeleteEmployee = require('./delete-employee');

const sandbox = sinon.createSandbox();

Before(() => {
    this.employeeId = undefined;
    this.result = undefined;
    this.error = undefined;
  
    sandbox.resetHistory();
  });

const getEmployee = function({employeeId})
{
    if(!employeeId || employeeId=='sdfgh-ghjkl56')
        return [];

    return [
        {
          employeeId: 35,
          name: 'vatsal',
          designation: 'SE',
          companyId: 'asdfg45-hjkghj'
        }
      ];
}
const employeeDb = {
    deleteDbEmployee: function(){}
};

const deleteEmployeeStub = sandbox.stub(employeeDb,'deleteDbEmployee');

deleteEmployeeStub.callsFake(({employeeId}) => {
    // console.log("in deleteEmployeeStub",employeeId);
    return "Deleted the employee succesfully"
});



Given('Enter employee id: {string} to delete a employee',
    (employeeId) => {
        console.log("GIVEN ",employeeId)
        this.employeeId=(employeeId) || undefined;
    },
);


When('Try to delete a employee', async ()=>{
    if(this.employeeId){
        this.employeeId=this.employeeId;
    }
    const deleteEmployee = makedeleteEmployee({
        Joi,
        getEmployee,
        deleteEmployeeById:employeeDb.deleteDbEmployee,
        ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError
    });
    try 
    {
        this.result = await deleteEmployee({
            id: this.employeeId
          });
    } 
    catch (e) {
        this.error = {
          name: e.name,
          message: e.message,
        };
    }
});


Then('Throw error: {string} with message: {string} while deleting a employee', (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message,
    });
});


Then('Show message: {string}', (message) => {
    expect(this.result).deep.equal(message);
});