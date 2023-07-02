module.exports = function makeGetEmployeeByIdAction({
    employeeUseCase
}){
    return async function getEmployeeByIdAction(req,res)
    {
        try {
            const companyId=req.params.id;
            const result=await employeeUseCase.deleteAllEmployeeByCompanyName({companyId})
            res.status(200).json({"success":"deleted","result":result})
        } catch (error) {
            console.log(error);
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }
}