const TABLE_NAME="roles";
function makeRoleDb({cockroach,dbError}) {
    return Object.freeze({
      createRole,
      updateRole,
      getPermissionById,
      getRoleById,
      getAllRoles,
      deleteRole,
      addPermission
    });
    async function addPermission({permission,roleId}) {
      try {
        const result= await cockroach.query(`UPDATE ${TABLE_NAME}  SET permission = $1  WHERE id=$2 `,[permission,roleId])
        return result;
      } catch (error) {
        throw new dbError("Error In DB Function")
      }     
      }
    async function getPermissionById({id}) {
      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} where id=$1`,[id])
        return result.rows[0].permission;
      } catch (error) {
        throw new dbError("Error In DB Function")
      }  
        
      }
    async function updateRole({companyId,permission,isMaster,name,roleId}) {
      try {
        const result= await  cockroach.query(`UPSERT INTO ${TABLE_NAME} (company_id,permission,is_master,name,id) VALUES ($1,$2,$3,$4,$5) returning *`,[companyId,permission,isMaster,name,roleId])
        return result;
      } catch (error) {
        throw new dbError("Error In DB Function")
      } 
       
      }
    async function createRole({companyId,permission,isMaster,name}) {
      try {
        const result = await cockroach.query(`INSERT INTO ${TABLE_NAME}(company_id,permission,is_master,name) VALUES($1,$2,$3,$4) RETURNING id`, [companyId,permission,isMaster,name])
        return result.rows[0].id;
      } catch (error) {
        throw new dbError("Error In DB Function")
      }   
    }
    async function getRoleById({id}) {
      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} where id=$1`,[id])
        return result.rows[0];
      } catch (error) {
        throw new dbError("Error In DB Function")
      }  
    }

    async function deleteRole({id}) {
      try {
        const result= await cockroach.query(`delete from ${TABLE_NAME} where id=$1`,[id])
        return result;
      } catch (error) {
        throw new dbError("Error In DB Function")
      }  
    }
    async function getAllRoles({}){
      try {
        const result = await cockroach.query(`select * from ${TABLE_NAME} `)
        return result.rows;
      } catch (error) {
        throw new dbError("Error In DB Function")
      }  
    }
  } 
  module.exports = makeRoleDb;
  