const TABLE_NAME="employee_role_association";
function makeEmployeeRoleAssociationDb({cockroach,dbError}) {
    return Object.freeze({
      assignRole,
      getAllRole
    }); 
    async function assignRole({roleId,employeeId}) {
      try {
        const result = await cockroach.query(`INSERT INTO ${TABLE_NAME}(role_id,employee_id) VALUES($1,$2)`, [roleId,employeeId])
        return result;
      } catch (error) {
        console.log(error);
        throw new dbError("Error In DB Function")
      }   
    }
    async function getAllRole({employeeId}){
      try {
        const result = await cockroach.query(`select * from ${TABLE_NAME} where employee_id=$1`, [employeeId])
        return result.rows;
      } catch (error) {
        console.log(error);
        throw new dbError("Error In DB Function")
      }   
    }
  } 
  module.exports = makeEmployeeRoleAssociationDb;
  