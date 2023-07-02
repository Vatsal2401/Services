module.exports = function makeLogoutSessionAction({
    sessionUseCase
}){
    return async function logoutSessionAction(req,res)
    {
        try {
            const accessToken=req.header('accessToken')
            const result=   await sessionUseCase.logoutSession({accessToken})
            res.status(200).json({"success":"logout"})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }

}