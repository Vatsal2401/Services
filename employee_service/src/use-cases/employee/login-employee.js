function makeLoginEmployeeAction({uuid,getRandomIpAndLocation, jwt,jwtSecretKey,Joi,isEmployeeExist,ValidationError,ForbiddenError,createSession }) {
  
    return async function loginEmployeeAction({employeeEmail,employeePassword,user_agent,device}) { 
        await validateInputData({employeeEmail,user_agent,device});
        // is Employee ALready Exist with same Email Using Database Validation 
        let jwt_token;
        let session_id;
        const address=await getRandomIpAndLocation({})
        const isEmployeeExists= await isEmployeeExist({employeeEmailId:employeeEmail})
        if(isEmployeeExists.rows[0].is_verified ){
             session_id= uuid.v1()
            const data={
              user_id:isEmployeeExists.rows[0].id,
              session_id
            }
            jwt_token = jwt.sign(data, jwtSecretKey);
            await createSession({jwt_token,user_id:isEmployeeExists.rows[0].id,session_id,user_agent,device ,ip_address:address.IP,city:address.City,country:address.Country,state:address.State})
        }
        else{
          throw new ForbiddenError("Email Address Validation Required Check Link For Verification")
        }
       return {jwt_token,session_id}
    };
    async function validateInputData({employeeEmail,user_agent,device}) {
      const schema = Joi.object({
        employeeEmail: Joi.string().email().required(),
        // employeePassword: Joi.string().min(3).required(),
        user_agent:Joi.string().min(3).required(),
        device:Joi.string().required(),
      });
      const { error,value } = schema.validate({employeeEmail,user_agent,device})
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  
  module.exports = makeLoginEmployeeAction;
  