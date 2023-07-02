function makeIsEmployeeExist({ Joi,isEmployeeExist }) {
  
    return async function isEmployeeExistFun({employeeEmailId}) {
      await validateEmployeeId({employeeEmailId});
      const  result=await isEmployeeExist({employeeEmailId})
      return result;
    };
    async function validateEmployeeId({employeeEmailId}) {
      const schema = Joi.object({
        employeeEmailId:Joi.string().uuid(),
      });
      const { error,value } = schema.validate({employeeEmailId});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  module.exports = makeIsEmployeeExist;
  