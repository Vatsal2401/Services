function makeAddRole({createRole,assignRole,Joi,ValidationError,ObjectAlreadyExistError }) {
  
    return async function addRoleFun({companyId,permission,isMaster,employeeId,name }) {
     await validateInputData({companyId,isMaster,permission,name,employeeId})
    const roleId =  await createRole({companyId,permission,isMaster,name})
    if (employeeId) {
      return await assignRole({employeeId,roleId})   
    }
   return roleId
    };
    async function validateInputData({companyId,permission,isMaster,name,employeeId}) {
        const schema = Joi.object({
            companyId: Joi.string().uuid().required(),
            permission: Joi.string().required(),
            isMaster:Joi.boolean().required(),
            name:Joi.string().required(),
            employeeId:Joi.string().uuid()
        });
        const { error,value } = schema.validate({companyId,permission,isMaster,name,employeeId})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeAddRole;
  