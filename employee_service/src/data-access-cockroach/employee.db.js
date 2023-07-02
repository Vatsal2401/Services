const TABLE_NAME="employee";
function makeEmployeeDb({cockroach,DbError}) {
    return Object.freeze({
      createEmployeeEntry,
      getEmployeeById,
      getAllEmployees,
      deleteEmployeeEntry,
      updateEmployeeEntry,
      isEmployeeExist,
      deleteAllEmployeeOfCompany,
      isEmployeeExist,
      verifyEmployeeEmail
    });
    
    async function deleteAllEmployeeOfCompany({companyId}) {
      try {
        const result = await  cockroach.query(`DELETE FROM ${TABLE_NAME} WHERE company_id = $1`,[companyId])
        return result
      } catch (error) {
        throw new DbError("Error In DB Function")
      }
     
    }
    async function isEmployeeExist({employeeEmailId}){
      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} where email=$1`,[employeeEmailId])
      return result;
      } catch (error) {
        throw new DbError("Error In DB Function")
      }
      
   }
    async function getEmployeeById({id,databaseName}) {

      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} where id=$1`,[id])
        return result.rows[0];
      } catch (error) {
        throw new DbError("Error In DB Function")
      }
       
      }
    async function getAllEmployees({databaseName,company_id}) {
      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} WHERE company_id = $1 `,[company_id])
        return result.rows;
      } catch (error) {
        throw new DbError("Error In DB Function")
      }  
      }
    async function updateEmployeeEntry({is_verified,employeeName,employeeEmail,employeePossition,employeeId,company_id,password}) {
      try {
        const result= await  cockroach.query(`UPSERT INTO ${TABLE_NAME} (id,name,email,position,company_id,is_verified,password) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *`,[employeeId,employeeName,employeeEmail,employeePossition,company_id,is_verified,password])
        return result;
      } catch (error) {
        throw new DbError("Error In DB Function")
      }  
       
      }   
    async function verifyEmployeeEmail({employeeEmail}){
      try {
        const result= await  cockroach.query(`UPDATE ${TABLE_NAME}  SET is_verified = true WHERE email=$1 `,[employeeEmail])
        return result;
      } catch (error) {
        throw new DbError("Error In DB Function")
      }  
    }
    async function deleteEmployeeEntry({id,databaseName}) {
      try {
        const result = await  cockroach.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1`,[id])
        return result
      } catch (error) {
        throw new DbError("Error In DB Function")
      }     
      }
    async function createEmployeeEntry({password,employeeName,employeeEmail,position,company_id}) {
      try {
        const result = await cockroach.query(`INSERT INTO ${TABLE_NAME}(name,email,position,company_id,password) VALUES($1,$2,$3,$4,$5) RETURNING id`, [employeeName,employeeEmail,position,company_id,password])
        return result;
      } catch (error) {
        throw new DbError("Error In DB Function")
      }      
    }
  } 
  module.exports = makeEmployeeDb;
  