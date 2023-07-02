module.exports = function makedeleteCollectionAction({
    collectionUseCase
}){
    return async function deleteCollectionAction(req,res)
    {
        try {
            const {name}=req.body;
            const results= await  collectionUseCase.deleteCollectionAction({name})
            res.status(201).json({success:results[0]})
        } catch (error) {
           const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
           res.status(httpStatusCode).json({ error: error });
        }
    }
}