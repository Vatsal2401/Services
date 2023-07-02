module.exports = function makeUploadFileAction({
    gcpUsecase
}){
    return async function uploadFileAction(req,res)
    {
        try {
            const bucketName      = "experro-dev";
            const fileName        = req.file.filename
            const results         = await  gcpUsecase.uploadFile({bucketName,fileName})
            res.status(201).send({success:results[0]})
        } catch (error) {
            const httpStatusCode  = error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).send({error:error.message});
        }
    }
}