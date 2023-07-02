function makeUpdateEmployee({ updateEmployee, Joi,ValidationError }) {
  
    return async function updateEmployeeFun({is_verified,employeeName,employeeEmail,employeePossition,employeeId,company_id,password }) {
      await validateInputData({is_verified,employeeName,employeeEmail,employeePossition,employeeId,company_id,password});

      return await updateEmployee({ is_verified,employeeName,employeeEmail,employeePossition,employeeId,company_id,password });;
  
    };
    async function validateInputData({ is_verified,employeeName,employeeEmail,employeePossition,employeeId,company_id,password}) {
      const schema = Joi.object({
        employeeId: Joi.string().uuid().required(),
        employeeName: Joi.string().min(3).required(),
        employeeEmail: Joi.string().email().required(),
        password: Joi.string().min(3).required(),
        employeePossition: Joi.string().required(),
        company_id:Joi.string().uuid().required(),
        is_verified:Joi.boolean().required()

      });
      const { error,value } = schema.validate({  is_verified,employeeName,employeeEmail,employeePossition,employeeId,company_id,password});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  
  module.exports = makeUpdateEmployee;
  