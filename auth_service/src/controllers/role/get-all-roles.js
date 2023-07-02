module.exports = function makeGetAllRolesAction({
    roleUseCase
}){
    return async function getAllRolesAction(req,res)
    {
        try {
            const results = await  roleUseCase.getAllRoles({})
              res.status(200).send({success:results})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }
}