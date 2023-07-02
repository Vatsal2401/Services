module.exports = function makeDeleteEmployeeAction({
    employeeUseCase
}){
    return async function deleteEmployeeAction(req,res)
    {
        try {
            const id=req.params.id;
            await employeeUseCase.deleteEmployeeAction({id})
            res.status(200).json({"success":"deleted"})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }
}