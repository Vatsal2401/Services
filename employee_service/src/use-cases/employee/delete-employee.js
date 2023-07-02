function makeDeleteEmployeeById({ Joi,getAllEmployeeByCompanyName,deleteEmployeeById,ValidationError,ForbiddenError, isEmployeeEmailExist }) {
  
    return async function deleteEmployeeByIdFun({id}) {
      await validateEmployeeId({id});  
      return await deleteEmployeeById({id});
  
    };
    async function validateEmployeeId({id}) {
      const schema = Joi.object({
        id:Joi.string().uuid(),
      });
      const { error,value } = schema.validate({id});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
      
    }
  }
  
  module.exports = makeDeleteEmployeeById;
  