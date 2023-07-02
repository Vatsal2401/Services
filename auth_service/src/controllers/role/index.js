const {roleUseCase}=require("../../use-cases");
const makeAddRoleAction = require('./add-role');
const makeAssignRoleAction=require('./assign-role');
const assignRoleAction = makeAssignRoleAction({roleUseCase})
const addRoleAction   =  makeAddRoleAction({
    roleUseCase
})
const makeGetRoleById=require('./get-role-by-id')
const getRoleByIdAction=makeGetRoleById({roleUseCase})
const makeGetAllRolesAction=require('./get-all-roles')
const getAllRoles=makeGetAllRolesAction({roleUseCase})
const makeDeleteRoleAction=require("./delete-role")
const deleteRole=makeDeleteRoleAction({roleUseCase})
const makeUpdateRoleAction=require("./update-role")
const updateRole=makeUpdateRoleAction({roleUseCase})
const makeAddPermissionAction = require("./add-permission")
const addPermission = makeAddPermissionAction({roleUseCase})
module.exports=Object.freeze({
    addRoleAction,
    assignRoleAction,
    getRoleByIdAction,
    getAllRoles,
    deleteRole,
    updateRole,
    addPermission
});