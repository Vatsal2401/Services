function makeCheckPermission({getAllRoles,getPermissionById,Joi,ValidationError,ObjectAlreadyExistError }) {
    return async function checkPermission({permission,employeeId }) {
      await validateInputData({employeeId,permission})
    const key        =  permission.split('.')
    let  isAuthorize =  false;
    const roles      =  await getAllRoles({employeeId})
    for (const i in roles) {
      const permissions =JSON.parse(await getPermissionById({id:roles[i].role_id})) 
       isAuthorize = permissions[key[0]][key[1]]
       if (isAuthorize) {
           return isAuthorize
       } 
    }
    return  isAuthorize
    };
    async function validateInputData({permission,employeeId}) {
        const schema = Joi.object({
            permission: Joi.string().required(),
            employeeId:Joi.string().uuid().required(),
        });
        const { error,value } = schema.validate({permission,employeeId})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeCheckPermission;
  