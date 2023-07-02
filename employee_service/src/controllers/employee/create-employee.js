module.exports = function makecreateEmployeeAction({
    employeeUseCase
}){
    return async function createEmployeeAction(req,res)
    {
        try {
            const employeeName    = req.body.employeeName;
            const employeeEmail   = req.body.employeeEmail;
            const position        = req.body.position;
            const company_name    = req.body.company_name;  
            const password        = req.body.password;
            const results         = await  employeeUseCase.createEmployeeAction({password,employeeName,employeeEmail,position,company_name})
             res.status(201).send({success:results.rows[0].id})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }

}