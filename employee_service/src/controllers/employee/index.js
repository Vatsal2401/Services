const {employeeUseCase,emailUseCase}=require("../../use-cases");

const makeCreateEmpoyeeAction = require('./create-employee');
const createEmpoyeeAction = makeCreateEmpoyeeAction({
    employeeUseCase
})
const makeDeleteEmpoyeeAction=require('./delete-employee');
const deleteEmpoyeeAction = makeDeleteEmpoyeeAction({
    employeeUseCase
})
const makeDeleteEmpoyeeOfCompanyAction=require('./delete-all-employee-of-company');
const deleteEmpoyeeOfCompanyAction = makeDeleteEmpoyeeOfCompanyAction({
    employeeUseCase
})
const makeGetAllEmpoyeeAction = require("./get-all-employee")
const getAllEmpoyeeAction = makeGetAllEmpoyeeAction({
    employeeUseCase
})
const makeGetEmpoyeeByIdAction = require("./get-employee-by-id")
const getEmpoyeeByIdAction = makeGetEmpoyeeByIdAction({
    employeeUseCase
})
const makeUpdateEmpoyeeAction=require("./update-employee");
const updateEmpoyeeAction = makeUpdateEmpoyeeAction({
    employeeUseCase
})
const makeLoginEmployeeAction =require("./login-employee");
const loginEmployeeAction = makeLoginEmployeeAction({
    employeeUseCase
})
const makeLogoutEmployeeAction =require("./logout-employee");
const logoutEmployeeAction = makeLogoutEmployeeAction({
    employeeUseCase
})
const makeVerifyEmployeeEmailAction=require("./verify-email");
const verifyEmployeeEmailAction = makeVerifyEmployeeEmailAction({
    emailUseCase
})
module.exports=Object.freeze({
    getEmpoyeeByIdAction,
    createEmpoyeeAction,
    deleteEmpoyeeOfCompanyAction,
    deleteEmpoyeeAction,
    getAllEmpoyeeAction,
    loginEmployeeAction,
    updateEmpoyeeAction,
    logoutEmployeeAction,
    verifyEmployeeEmailAction
});