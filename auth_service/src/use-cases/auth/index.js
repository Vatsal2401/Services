const {sessionDb}=require("../../data-access-cockroach")
const jwt=require("jsonwebtoken")
const jwtSecretKey="vatsalpatel"
const exceptions=require("../../exceptions")
const {checkPermission}=require("../roles")
const makeAuthorizeUserAction  = require("./authorize-user")

const  authorizeUser        =  makeAuthorizeUserAction({checkPermission,updateSessionExpiryTime:sessionDb.updateSessionExpiryTime,jwt,jwtSecretKey,getSessionById:sessionDb.getSessionById, ValidationError: exceptions.ValidationError,ForbiddenError: exceptions.forbiddenError});

const authUseCase=Object.freeze({
    authorizeUser,
})
module.exports=authUseCase;
