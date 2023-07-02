module.exports = function makeDeleteRoleAction({
    roleUseCase
}){
    return async function deleteRoleAction(req,res)
    {
        try {
            const results = await  roleUseCase.deleteRole({id:req.params.id})
              res.status(204).send({success:results[0]})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }
}