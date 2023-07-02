module.exports = function makeAssignRoleAction({
    roleUseCase
}){
    return async function assignRoleAction(req,res)
    {
        try {
            const employeeId      = req.body.employeeId;
            const roleId          = req.body.roleId;
            const results          = await  roleUseCase.assignRole({employeeId,roleId})
              res.status(201).send({success:results[0]})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }
}
