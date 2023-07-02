module.exports = function makeCreateSessionAction({
    sessionUseCase
}){
    return async function createSessionAction(req,res)
    {
        try {
            const user_id           = req.body.user_id;
            const jwt_token         = req.body.jwt_token;
            const session_id        = req.body.session_id;
            const user_agent        = req.body.user_agent;
            const device            = req.body.device;
            const ip_address        = req.body.ip_address
            const city              = req.body.city
            const  state            = req.body.state
            const country           = req.body.country
            const results= await  sessionUseCase.createSession({user_id,jwt_token,session_id,user_agent,device ,ip_address, city,state,country })
          console.log(results.rows[0].id);
             res.status(201).send({success:results[0]})
        } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).send({error:error.message});
        }
    }

}