  function makeLogoutSessionAction({logoutSession,jwt,jwtSecretKey,Joi,ValidationError,ForbiddenError }) {
    return async function logoutSessionAction({session_id}) {
       await validateSessionId({session_id})
       return await logoutSession({session_id}); 
    };
    async function validateSessionId({session_id}) {
      const schema = Joi.object({
        session_id:Joi.string().uuid().required(),
      });
      const { error ,value} = schema.validate({session_id})
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  module.exports = makeLogoutSessionAction;
  

  

  