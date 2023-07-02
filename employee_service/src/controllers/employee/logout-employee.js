module.exports = function makeLogoutEmployeeAction({
    employeeUseCase
}){
    return async function logoutEmployeeAction(req,res)
    {
        try {
            const accessToken=req.header('accessToken')
            const result=await employeeUseCase.logoutEmployee({accessToken})
            res.status(200).json({"success":"employee logout successfully","token":result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }
}