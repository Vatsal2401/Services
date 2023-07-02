module.exports = function makeAddPermissionAction({
    roleUseCase
}){
    return async function addPermissionAction(req,res)
    {
        try {
            const apiName        = req.body.apiName;
            const permission       = req.body.permission;
            const result          = await  roleUseCase.addPermission({apiName,permissionObj:permission })
            res.status(201).send({success:result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).send({error:error.message});
        }
    }
}