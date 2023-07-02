function makeGetAllRoles({getAllRoles,Joi,ValidationError,ObjectAlreadyExistError }) {
    return async function getAllRolesFun({}) {
    return  await getAllRoles({})
    };
  }
  module.exports = makeGetAllRoles;
  