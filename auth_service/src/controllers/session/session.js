function makeSessionController({sessionUseCase,Joi}){

    return Object.freeze({
        getAllsession,
        deleteAllSessionOfCompany,
        filterSession,
        createSession,
        updateSession,
        logoutsession
    })
    async function filterSession(req,res){
        try {  
             const filterObject = req.body.filterBy
             const orderBy      = req.body.orderBy ? req.body.orderBy : "";
             const results      = await  sessionUseCase.filterSession({filterObject,orderBy})
             res.status(200).send({success:results})
        } catch (error) {
            console.log(error);
             res.status(400).send({error:error.message});
        }
    }
    async function deleteAllSessionOfCompany(req,res){
        try {
            const companyId=req.params.id;
            const result=await sessionUseCase.deleteAllSessionByCompanyName({companyId})
            res.status(200).json({"success":"deleted","result":result})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    }
    async function getAllsession (req,res){
        try {
              const company_name = req.params.cname;
              const result=await sessionUseCase.getAllSessionAction({company_name});
              res.status(200).json(result);
         } catch (error) {
            console.log(error);
              return res.status(400).json({ error: error.message });
         }      
    }
    //  async function getSessionById(req,res){
    //     try {
    //             const id=req.params.id;
    //             const result=await sessionUseCase.getSessionByIdAction({id});
    //             res.status(200).json(result);
    //         } catch (error) {
    //             console.log(error);
    //             return res.status(400).json({ error:error.message });
    //         }
    // }
    async function createSession(req,res){
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
            console.log(error);
             res.status(400).send({error:error.message});
        }
    }
    async function logoutsession(req,res){
        try {
            const accessToken=req.header('accessToken')
            const result=   await sessionUseCase.logoutSession({accessToken})
            res.status(200).json({"success":"logout"})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    }
    async function updateSession(req,res){
        try {
            const sessionId=req.params.id;
            const sessionName=req.body.sessionName;
            const result=await sessionUseCase.updateSessionAction({ sessionName,sessionId})
            res.status(200).send({"success":"updated","result":result})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    }
    async function validateSession({sessionName,sessionEmail,position,company_name}) {
        const schema = Joi.object({
          sessionName: Joi.string().min(3).required(),
          sessionEmail: Joi.string().email().required(),
          position:Joi.string().min(3).required(),
          company_name:Joi.string().min(3).required(),
        });
        const { error } = schema.validate({sessionName,sessionEmail,position,company_name})
        if (error) {
          throw new Error(error.message);
        }
        return ;
      }
    
}

module.exports=makeSessionController