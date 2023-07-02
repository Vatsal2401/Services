module.exports = function makeUpdateEmployeeAction({
    employeeUseCase
}){
    return async function updateEmployeeAction(req,res)
    {
        try {
            const employeeId        = req.body.employeeId;
            const employeeName      = req.body.employeeName;
            const employeeEmail     = req.body.employeeEmail;
            const employeePossition = req.body.employeePossition;
            const password          = req.body.password;
            const company_id        = req.body.company_id
            const is_verified       = req.body.is_verified;
            const result            = await employeeUseCase.updateEmployeeAction({employeeName,employeeEmail,employeePossition,employeeId,company_id,password,is_verified})
            res.status(200).send({"success":"updated","result":result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }
}