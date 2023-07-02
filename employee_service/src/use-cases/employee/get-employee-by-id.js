function makeGetEmployeeById({ Joi,getEmployeeById,ValidationError,ForbiddenError, isEmployeeEmailExist }) {
  
    return async function getEmployeeByIdFun({id}) { 
       await validateEmployeeId({id});
      return await getEmployeeById({id});
  
    };
    async function validateEmployeeId({id}) {
      const schema = Joi.object({
        id:Joi.string().uuid(),
      })
      const { error,value } = schema.validate({id});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  
  module.exports = makeGetEmployeeById;
  