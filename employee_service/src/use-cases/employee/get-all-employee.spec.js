const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const expect = require('chai').expect;
const Joi = require('joi');

Before(() => {
  this.result = undefined;
  this.error = undefined;

  sandbox.resetHistory();
});

const employeeDb = {
    getAllDbEmployee:()=>{}
};

const makegetAllEmployee = require('./get-all-employee-by-company-name');

const getAllEmployeeStub = sandbox.stub(employeeDb,"getAllDbEmployee");

getAllEmployeeStub.callsFake(()=>{
  return [{
      "employee_id": "7c08cc2f-b148-4772-b062-b0859742cf7c",
      "employee_name": "vatsal",
      "employee_email": "vatsalpatel@gmail.com",
      "employee_designation": "Intern",
      "emp_company_id": "4c1e7d54-b379-4524-aa02-78f3ad8d494b",
      "is_varified": true
    }]
});

Given(
  'Get all the employees.',
  () => {}
);

When('Try to get all employees.', async () => {
  try {
    const getAllEmployee =  makegetAllEmployee({ 
        getAllDbEmployee:employeeDb.getAllDbEmployee,
    });
    this.result = await getAllEmployee();
  } 
  catch (e) {
    console.log(e);
    this.error = e;
  }
});

Then('It will give employee list: "{string}"', (employeedetail) => {
   expect(this.result).deep.equal(JSON.parse(employeedetail)); 
});


Then('getAllEmployee function is called {int} time', (count) => {
    sinon.assert.callCount(getAllDbEmployeeStub, count)
});  