module.exports = function makeUpdateSessionAction({
    sessionUseCase
}){
    return async function updateSessionAction(req,res)
    {
        try {
            const sessionId=req.params.id;
            const sessionName=req.body.sessionName;
            const result=await sessionUseCase.updateSessionAction({ sessionName,sessionId})
            res.status(200).send({"success":"updated","result":result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }

}