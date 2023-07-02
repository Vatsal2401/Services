
function makeAddPermission({getAllRoles,addPermission,Joi,ValidationError,ObjectAlreadyExistError }) {
  
    return async function addPermissionFun({apiName,permissionObj}) {
     const roles=await getAllRoles({})
     for (const role of roles) {
         const permission = JSON.parse(role.permission)
        if (permission[apiName]) {
             permission[apiName][permissionObj.name] = role.name=='master' ? true :permissionObj.value;
             await addPermission({permission:JSON.stringify(permission),roleId:role.id})
        }
     }
    return "Permission Added SuccessFully"
    };
    async function validateInputData({apiName,permissionObj}) {
        const schema = Joi.object({
            apiName: Joi.string().required(),
            apiValue: Joi.string().required(),
        });
        const { error,value } = schema.validate({apiName,apiValue})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeAddPermission;
  