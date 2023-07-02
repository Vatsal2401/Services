function makeGetRoleById({getRoleById,Joi,ValidationError,ObjectAlreadyExistError }) {
  
    return async function getRoleByIdFun({id}) {
     await validateInputData({id})
     return  await getRoleById({id})
    };
    async function validateInputData({id}) {
        const schema = Joi.object({
              id: Joi.string().uuid().required(),
        });
        const { error,value } = schema.validate({id})
        if (error) {
          throw new ValidationError(error.message);
        }
        return value;
      }
  }
  module.exports = makeGetRoleById;
  