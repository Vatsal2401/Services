module.exports = function makegetByIdAction({
    roleUseCase
}){
    return async function getRoleByIdAction(req,res)
    {
        try {
            const results = await  roleUseCase.getRoleById({id:req.params.id})
              res.status(200).send({success:results})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }
}