const {collectionDb}=require("../../data-access-cockroach")
const {collectionService}=require("../../external-service-call")

const Joi = require('joi')
const exceptions=require("../../exceptions")
const makeCreateCollectionAction  = require("./create-collection")
const  createCollection           = makeCreateCollectionAction({createCollection:collectionService.createCollection,Joi,getCompanyIdByName:companyService.getCompanyIdByCompanyName,isCollectionExist:collectionDb.isCollectionExist, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError,bcrypt});
const makeDeleteCollection = require("./delete-collection")
const deleteCollection     = makeDeleteCollection({deleteCollection:collectionService.deleteCollection,Joi,ValidationError:exceptions.ValidationError})

const makeGetAllCollection =require("./get-all-collection")
const getAllCollection =makeGetAllCollection({getAllCollection:collectionService.getAllCollection})
const collectionUseCase=Object.freeze({
    createCollection,
    deleteCollection,
    getAllCollection
})
module.exports=collectionUseCase;
