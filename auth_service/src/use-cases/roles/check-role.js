function makeCheckRole({getAllRoles,getRoleById,Joi,ValidationError,ObjectAlreadyExistError }) {
    return async function checkRole({employeeId,name }) {
      await validateInputData({employeeId,name})
    let  hasRole     =  false;
    const roles      =  await getAllRoles({employeeId})
    if (roles.length>0) {
      for (const i in roles) {
        const role = await getRoleById({id:roles[i].role_id})
        if (role) {
          if (role.name==name || role.is_master) {
            return true
         }
        }  
      }
    }
    return  hasRole
    };
    async function validateInputData({employeeId,name}) {
        const schema = Joi.object({
            name: Joi.string().required(),
            employeeId:Joi.string().uuid().required(),
        });
        const { error,value } = schema.validate({employeeId,name})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeCheckRole;
  