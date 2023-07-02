module.exports = function makeGetEmployeeByIdAction({
    employeeUseCase
}){
    return async function getEmployeeByIdAction(req,res)
    {
        try {
            const id=req.params.id;
            const result=await employeeUseCase.getEmployeeByIdAction({id});
            res.status(200).json(result);
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            return res.status(httpStatusCode).json({ error:error.message });
        }
    }
}