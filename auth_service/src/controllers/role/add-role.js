module.exports = function makeAddRoleAction({
    roleUseCase
}){
    return async function addRoleAction(req,res)
    {
        try {
            const companyid       = req.body.companyid;
            const permission       =JSON.stringify(req.body.permission);
            const ismaster        = req.body.ismaster;
            const employeeid      = req.body.employeeid || undefined;
            const name             = req.body.name;
            const results          = await  roleUseCase.addRole({companyid,permission,ismaster,employeeid,name })
            res.status(201).send({success:results})
        } catch (error) {
            console.log(error);
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).send({error:error.message});
        }
    }
}