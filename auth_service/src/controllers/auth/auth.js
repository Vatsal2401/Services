function makeAuthController({authUseCase,Joi}){

    return Object.freeze({
        authorizeUser
    })
     async function authorizeUser(req,res){
        try {
            const accessToken= req.header('accessToken')
            const result     = await   authUseCase.authorizeUser({accessToken})
             res.status(200).send({success:"authorize"})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }
    
}

module.exports=makeAuthController