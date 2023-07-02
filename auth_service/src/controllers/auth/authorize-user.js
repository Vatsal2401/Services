module.exports = function makeAuthorizeUserAction({
    authUseCase
}){
    return async function authorizeUserAction(req,res)
    {
        try {
             const accessToken=req.header('accessToken')
             const permission = req.body.permission
             const result=await   authUseCase.authorizeUser({accessToken,permission})
             res.status(200).send({success:"authorize"})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }

}