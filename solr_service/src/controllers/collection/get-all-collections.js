module.exports = function makeGetAllCollectionAction({
    collectionUseCase
}){
    return async function getAllCollectionAction(req,res)
    {
        try {
            const results= await  collectionUseCase.getAllCollectionAction({})
            res.status(201).json({success:results[0]})
        } catch (error) {
           const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
           res.status(httpStatusCode).json({ error: error });
        }
    }
}

