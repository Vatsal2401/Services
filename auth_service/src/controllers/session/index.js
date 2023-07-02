const {sessionUseCase}=require("../../use-cases");
const makeCreateSessionAction = require('./create-session');
const createSessionAction = makeCreateSessionAction({
    sessionUseCase
})
const makeFilterSessionAction=require("./filter-session")
const filterSessionAction = makeFilterSessionAction({
    sessionUseCase
})
const makeLogoutSessionAction=require("./logout-session")
const logoutSessionAction=makeLogoutSessionAction({
    sessionUseCase
})
const makeUpdateSessionAction=require("./update-session")
const updateSessionAction = makeUpdateSessionAction({
    sessionUseCase
})
module.exports=Object.freeze({
    createSessionAction,
    filterSessionAction,
    logoutSessionAction,
    updateSessionAction
});