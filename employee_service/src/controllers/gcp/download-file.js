module.exports = function makeDownloadFileAction({
    gcpUsecase
}){
    return async function downloadFileAction(req,res)
    {
        try {
            const bucketName      = "experro-dev";
            const fileName        = req.body.fileName;
            const results         = await  gcpUsecase.downloadFile({bucketName,fileName})
             res.status(201).send({success:results})
        } catch (error) {
              const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }

}