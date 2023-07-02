const {companyDb}=require("../../data-access-cockroach")
const {employeeService}=require("../../internal-service-call")
const kafka = require("../kafka")

const exceptions =require("../../exceptions")
const Joi = require('joi');
const makeCreateCompanyAction  = require("./create-company")
const makeDeleteCompanyAction  = require("./delete-company")
const makeGetAllCompanyAction  = require("./get-all-company")
const makeGetCompanyIdByName   = require("./get-companyIdByName")
const makeUpdateCompanyAction  = require("./update-company")
const makeGetCompanyById       = require("./get-companyById")
const makeUpdateCompanyById    = require("./update-company-by-id")
const  createCompanyAction = makeCreateCompanyAction({kafka,createCompany:companyDb.createCompanyEntry,getCompanyIdByName:companyDb.getCompanyIdByName,Joi,ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const  deleteCompanyAction = makeDeleteCompanyAction({deleteCompany:companyDb.deleteCompanyEntry,isCompanyExist:companyDb.getCompanyById,Joi,deleteAllEmployeeOfCompany:employeeService.deleteAllEmployeeOfCompany,getCompanyById:companyDb.getCompanyById,ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const  getAllCompanyAction = makeGetAllCompanyAction({getAllCompany:companyDb.getAllCompany,ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const  getCompanyIdByNameAction= makeGetCompanyIdByName({getCompanyIdByName:companyDb.getCompanyIdByName,Joi,ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const  updateCompanyAction = makeUpdateCompanyAction({updateCompany:companyDb.updateCompanyEntry,isCompanyExist:companyDb.getCompanyById,Joi,ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const  getCompanyByIdAction= makeGetCompanyById({getCompanyById:companyDb.getCompanyById,Joi,ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const  updateCompanyById   = makeUpdateCompanyById({ObjectAlreadyExistError:exceptions.objectAlreadyExistError,isCompanyExist:companyDb.getCompanyById,Joi,updateCompanyById:companyDb.updateCompanyById,ValidationError:exceptions.ValidationError})
// const  isCompanyExist      = makeIsCompanyExists({isCompanyExist:companyDb.isCompanyExist})
const companyUseCase=Object.freeze({
    createCompanyAction,
    getCompanyIdByNameAction,
    deleteCompanyAction,
    updateCompanyAction,
    getAllCompanyAction,
    getCompanyByIdAction,
    updateCompanyById
})
module.exports=companyUseCase;
