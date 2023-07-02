function makeAssignRole({assignRole,Joi,ValidationError,ObjectAlreadyExistError }) {
    return async function assignRoleFun({employeeId,roleId}) {
     await validateInputData({roleId,employeeId})
     return  await assignRole({employeeId,roleId})
    };
    async function validateInputData({employeeId,roleId}) {
        const schema = Joi.object({
            roleId: Joi.string().uuid().required(),
            employeeId:Joi.string().uuid().required()
        });
        const { error,value } = schema.validate({employeeId,roleId})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeAssignRole;
  