function makeDeleteRole({isRoleExist,deleteRole,Joi,ValidationError,ObjectAlreadyExistError }) {
  
    return async function deleteRoleFun({id}) {
      await validateInputData({id})
      const isRoleExists=await isRoleExist({id})
      if(!isRoleExists){
        throw new ObjectAlreadyExistError("Role With This Id Doesn't Exists")
       }    
    return  await deleteRole({id})
    };
    async function validateInputData({id}) {
        const schema = Joi.object({
              id: Joi.string().uuid().required(),
        });
        const { error,value } = schema.validate({id})
        console.log(error);
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeDeleteRole;
  