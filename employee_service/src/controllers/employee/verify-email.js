module.exports = function makeVerifyEmployeeEmailAction({
    emailUseCase
}){
    return async function verifyEmployeeEmailAction(req,res)
    {
        try {
            const employeeEmail=req.params.id;
            const result=await emailUseCase.verifyEmail({employeeEmail})
            res.status(200).json({"success":"Email verified successfully","result":result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }
}