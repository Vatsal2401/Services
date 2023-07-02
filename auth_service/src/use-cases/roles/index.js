const {roleDb,employeeRoleAssociationDb}=require("../../data-access-cockroach")
const Joi = require('joi');
const exceptions=require("../../exceptions");
const makeAddPermission=require("./add-permission")
const addPermission  =makeAddPermission({addPermission:roleDb.addPermission,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,getAllRoles:roleDb.getAllRoles,Joi,ValidationError:exceptions.ValidationError})
const makeCheckRole  =require("./check-role")
const checkRole      = makeCheckRole({ObjectAlreadyExistError:exceptions.objectAlreadyExistError,getAllRoles:employeeRoleAssociationDb.getAllRole,getRoleById:roleDb.getRoleById,Joi,ValidationError:exceptions.ValidationError})
const makeAddRole    = require("./create-role")
const addRole        = makeAddRole({createRole:roleDb.createRole,assignRole:employeeRoleAssociationDb.assignRole,Joi, ValidationError: exceptions.ValidationError,ObjectAlreadyExistError: exceptions.objectAlreadyExistError});
const makeCheckPermission =require("./check-permission");
const checkPermission=makeCheckPermission({getAllRoles:employeeRoleAssociationDb.getAllRole,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,getPermissionById:roleDb.getPermissionById,Joi,ValidationError:exceptions.ValidationError})
const makeAssignRole=require("./assign-role")
const assignRole=makeAssignRole({assignRole:employeeRoleAssociationDb.assignRole,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,Joi,ValidationError:exceptions.ValidationError})
const makeGetAllRoles=require("./get-all-roles")
const getAllRoles=makeGetAllRoles({ObjectAlreadyExistError:exceptions.objectAlreadyExistError,getAllRoles:roleDb.getAllRoles,Joi,ValidationError:exceptions.ValidationError})
const makeDeleteRole=require("./delete-role")
const deleteRole=makeDeleteRole({isRoleExist:roleDb.getRoleById,deleteRole:roleDb.deleteRole,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,ValidationError:exceptions.ValidationError,Joi})
const makeUpdateRole=require('./update-role')
const updateRole=makeUpdateRole({isRoleExist:roleDb.getRoleById,ObjectAlreadyExistError:exceptions.objectAlreadyExistError,Joi,updateRole:roleDb.updateRole,ValidationError:exceptions.ValidationError})

const makeGetRoleById=require("./get-role-by-id")
const getRoleById=makeGetRoleById({ObjectAlreadyExistError:exceptions.objectAlreadyExistError,getRoleById:roleDb.getRoleById,Joi,ValidationError:exceptions.ValidationError})
const sessionUseCase=Object.freeze({
    addRole,
    checkPermission,
    assignRole,
    getAllRoles,
    deleteRole,
    updateRole,
    checkRole,
    addPermission,
    getRoleById
})
module.exports=sessionUseCase;
