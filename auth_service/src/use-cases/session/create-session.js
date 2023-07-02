function makeCreateSessionAction({createSession, Joi,ValidationError,ForbiddenError }) {
  
    return async function createSessionAction({user_id,jwt_token,session_id,user_agent,device ,ip_address, city,state,country }) {
       await validateInputData({user_id,jwt_token,session_id,user_agent,device ,ip_address, city,state,country})
       return await createSession({ user_id,jwt_token,session_id,user_agent,device ,ip_address, city, state,country }); 
    };
    async function validateInputData({user_id,jwt_token,session_id,user_agent,device ,ip_address, city,state,country}) {
      const schema = Joi.object({
        user_id: Joi.string().uuid().required(),
        jwt_token: Joi.string().required(),
        session_id:Joi.string().uuid().required(),
        user_agent:Joi.string().required(),
        device:Joi.string().min(3).required(),
        ip_address:Joi.string().ip().required(),
        city:Joi.string().required(),
        state:Joi.string().required(),
        country:Joi.string().required(),
      });
      const { error ,value} = schema.validate({user_id,jwt_token,session_id,user_agent,device ,ip_address, city,state,country})
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  
  module.exports = makeCreateSessionAction;
  