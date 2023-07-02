const {sessionDb}=require("../../data-access-cockroach")
// const {companyService}=require("../../internal-service-call")
const jwt=require("jsonwebtoken")
const Joi = require('joi');
const jwtSecretKey="vatsalpatel"
const kafka= require("../kafka")
const exceptions=require("../../exceptions")
const makeFilterSession  =require("./filter-session")
const makeCreateSessionAction  = require("./create-session")
const makelogoutSession=require("./logout-session")
const makeFilterQuery = require("./filter-query")
const makeUpdateSessionExpiryTime=require("./update-session-expirytime")
const updateSessionExpiryTime=makeUpdateSessionExpiryTime({updateSessionExpiryTime:sessionDb.updateSessionExpiryTime,ForbiddenError:exceptions.forbiddenError,Joi,ValidationError:exceptions.ValidationError})
const filterQuery          = makeFilterQuery({ForbiddenError:exceptions.forbiddenError,Joi,ValidationError:exceptions.ValidationError})
const filterSession        =makeFilterSession({filterSession:sessionDb.filterSession,filterQuery})
const logoutSession        =makelogoutSession({jwt,jwtSecretKey,logoutSession:sessionDb.logoutSession,ForbiddenError:exceptions.forbiddenError,Joi,ValidationError:exceptions.ValidationError})
const createSession        = makeCreateSessionAction({runProducer:kafka.runProducer,createSession:sessionDb.createSessionEntry,Joi, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError});

const sessionUseCase=Object.freeze({
    updateSessionExpiryTime,
    createSession,
    logoutSession,
    filterSession,
    filterQuery
})
module.exports=sessionUseCase;
