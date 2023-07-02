const {authUseCase}=require("../../use-cases");
const makeAuthorizeUserAction = require("./authorize-user")
const authorizeUserAction     = makeAuthorizeUserAction({authUseCase})
module.exports=Object.freeze({
    authorizeUserAction,
});;