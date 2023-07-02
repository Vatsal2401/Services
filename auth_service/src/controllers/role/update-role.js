module.exports = function makeUpdateRoleAction({
    roleUseCase
}){
    return async function updateRoleAction(req,res)
    {
        try {
            const roleId           = req.body.roleId;
            const companyId        = req.body.companyId;
            const permission       =JSON.stringify(req.body.permission);
            const isMaster         = req.body.isMaster;
            const name             = req.body.name;
            const results          = await  roleUseCase.updateRole({companyId,permission,isMaster,name,roleId  })
            res.status(200).send({"success":"updated","result":results})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }
}