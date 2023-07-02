const {employeeDb}=require("../../data-access-cockroach")
const {companyService,authService}=require("../../internal-service-call")
const bcrypt = require('bcryptjs');
const geoip = require('geoip-lite');
const jwt = require("jsonwebtoken");
const uuid = require('uuid');
const jwtSecretKey="vatsalpatel"
const Joi = require('joi');
const {employeeTable}=require("../../entities")
const kafka= require("../kafka")
const exceptions=require("../../exceptions")
const makeCreateEmployeeAction  = require("./create-employee")
const makeDeleteEmployeeAction  = require("./delete-employee")
const makeGetAllEmployeeAction  = require("./get-all-employee-by-company-name")
const makeGetEmployeeByIdAction = require("./get-employee-by-id")
const makeUpdateEmployeeAction  = require("./update-employee")
const makeDeleteAllEmployeeOfCompany =require("./delete-all-employee-of-company")
const makeIsEmployeeExists      = require("./is-employee-exist")
const makeLoginEmployee =require("./login-employee")
const makeLogoutEmployee=require("./logout-employee")
const makeGetRandomIpAndLocation    = require("./get-random-location-and-ip")
const getRandomIpAndLocation         =  makeGetRandomIpAndLocation({geoip})
const  logoutEmployee                = makeLogoutEmployee({logoutSession:authService.logoutSession})
const  loginEmployee                 = makeLoginEmployee({jwtSecretKey,jwt,uuid,getRandomIpAndLocation,Joi,getEmployeeById:employeeDb.getEmployeeById,createSession:authService.createSession,isEmployeeExist:employeeDb.isEmployeeExist,ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError})
const  deleteAllEmployeeByCompanyName=makeDeleteAllEmployeeOfCompany({Joi,deleteAllEmployeeByCompanyName:employeeDb.deleteAllEmployeeOfCompany,getCompanyIdByName:companyService.getCompanyIdByCompanyName, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError})
const  createEmployeeAction          = makeCreateEmployeeAction({runProducer:kafka.runProducer,employeeTable,createEmployee:employeeDb.createEmployeeEntry,Joi,getCompanyIdByName:companyService.getCompanyIdByCompanyName,isEmployeeExist:employeeDb.isEmployeeExist, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError,bcrypt});
const  deleteEmployeeAction          = makeDeleteEmployeeAction({deleteEmployeeById:employeeDb.deleteEmployeeEntry,isEmployeeExist:employeeDb.isEmployeeExist,Joi, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError});
const  getAllEmployeeAction          = makeGetAllEmployeeAction({getAllEmployeeByCompanyName:employeeDb.getAllEmployees,getCompanyIdByName:companyService.getCompanyIdByCompanyName, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError});
const  getEmployeeByIdAction         = makeGetEmployeeByIdAction({getEmployeeById:employeeDb.getEmployeeById,Joi, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError});
const  updateEmployeeAction          = makeUpdateEmployeeAction({updateEmployee:employeeDb.updateEmployeeEntry,isEmployeeExist:employeeDb.isEmployeeExist,Joi, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError});
const  isEmployeeExist               = makeIsEmployeeExists({isEmployeeExist:employeeDb.isEmployeeExist})
const employeeUseCase=Object.freeze({
    logoutEmployee,
    createEmployeeAction,
    deleteEmployeeAction,
    updateEmployeeAction,
    getAllEmployeeAction,
    getEmployeeByIdAction,
    deleteAllEmployeeByCompanyName,
    isEmployeeExist,
    loginEmployee
})
module.exports=employeeUseCase;
