function makeUpdateRole({isRoleExist,updateRole,Joi,ValidationError,ObjectAlreadyExistError }) {
    return async function updateRoleFun({companyId,permission,isMaster,name,roleId}) {
      await validateInputData({companyId,isMaster,permission,name,roleId})
      const isRoleExists=await isRoleExist({id:roleId})
      if(!isRoleExists){
        throw new ObjectAlreadyExistError("Role With This Id Doesn't Exists")
       }    
     return await updateRole({companyId,permission,isMaster,name,roleId})
    };
    async function validateInputData({companyId,permission,isMaster,name,roleId}) {
        const schema = Joi.object({
            companyId: Joi.string().uuid().required(),
            permission: Joi.string().required(),
            isMaster:Joi.boolean().required(),
            name:Joi.string().required(),
            roleId:Joi.string().uuid().required()
        });
        const { error,value } = schema.validate({companyId,permission,isMaster,name,roleId})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeUpdateRole;
  