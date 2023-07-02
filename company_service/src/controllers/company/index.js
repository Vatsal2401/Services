const {companyUseCase}=require("../../use-cases");
const makeCreateCompanyAction = require('./create-company');
const createCompanyAction = makeCreateCompanyAction({
    companyUseCase
})
const makeDeleteCompanyAction=require('./delete-company');
const deleteCompanyAction = makeDeleteCompanyAction({
    companyUseCase
})

const makeGetAllCompanyAction = require("./get-all-company")
const getAllCompanyAction = makeGetAllCompanyAction({
    companyUseCase
})
const makeGetCompanyByIdAction = require("./get-company-by-id")
const getCompanyByIdAction = makeGetCompanyByIdAction({
    companyUseCase
})
const makeGetCompanyIdByNameAction=require("./get-company-id-by-name");
const getCompanyIdByNameAction = makeGetCompanyIdByNameAction({
    companyUseCase
})
const makeUpdateCompanyAction=require("./update-company");
const updateCompanyAction = makeUpdateCompanyAction({
    companyUseCase
})
const makeUpdateCompanyByIdAction =require("./update-company-by-id")
const updateCompanyById=makeUpdateCompanyByIdAction({companyUseCase})
module.exports=Object.freeze({
        getCompanyByIdAction,
        createCompanyAction,
        deleteCompanyAction,
        getAllCompanyAction,
        getCompanyIdByNameAction,
        updateCompanyAction,
        updateCompanyById
    })





