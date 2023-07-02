module.exports = function makeUploadDocumentAction({
    documentUseCase
}){
    return async function uploadDocumentAction(req,res)
    {
        try {
            const {name,numShards,configSet}=req.body;
            const results= await  documentUseCase.uploadDocumentAction({name,numShards,configSet})
            res.status(201).json({success:results[0]})
        } catch (error) {
           const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
           res.status(httpStatusCode).json({ error: error });
        }
    }
}