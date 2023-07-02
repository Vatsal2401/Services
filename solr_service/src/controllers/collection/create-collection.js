module.exports = function makecreateCollectionAction({
    collectionUseCase
}){
    return async function createCollectionAction(req,res)
    {
        try {
            const {name,numShards,configSet}=req.body;
            const results= await  collectionUseCase.createCollectionAction({name,numShards,configSet})
            res.status(201).json({success:results[0]})
        } catch (error) {
           const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
           res.status(httpStatusCode).json({ error: error });
        }
    }
}