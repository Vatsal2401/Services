module.exports = function makeFilterSessionAction({
    sessionUseCase
}){
    return async function filterSessionAction(req,res)
    {
        try {  
            const filterObject = req.body.filterBy
            const orderBy      = req.body.orderBy ? req.body.orderBy : "";
            const results      = await  sessionUseCase.filterSession({filterObject,orderBy})
            res.status(200).send({success:results})
       } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).send({error:error.message});
       }
    }

}