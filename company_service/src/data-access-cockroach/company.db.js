const TABLE_NAME="company";
function makeCompanyDb({cockroach}) {
    return Object.freeze({
      createCompanyEntry,
      getCompanyById,
      getAllCompany,
      deleteCompanyEntry,
      updateCompanyEntry,
      isCompanyExist,
      getCompanyIdByName,
      updateCompanyById
    });
    async function isCompanyExist({companyId}){
      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} where id=$1`,[companyId])
        return result;
      } catch (error) {
        throw new Error("Error In DB Function")
      }      
   }
   async function getCompanyById({companyId}) {
    try {
      const result= await cockroach.query(`select * from ${TABLE_NAME} where id=$1`,[companyId])
      return result;
    } catch (error) {
      throw new Error("Error In DB Function")
    }  
   
  }
  async function getCompanyIdByName({companyName}) {
    try {
      const result= await cockroach.query(`select id from ${TABLE_NAME} where name=$1`,[companyName])
      return result.rows[0];
    } catch (error) {
      throw new Error("Error In DB Function")
    }  
   
  }
    async function getAllCompany({}) {
      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} `)
        return result;
      } catch (error) {
        throw new Error("Error In DB Function")
      }    
      }
    async function updateCompanyEntry({companyId, companyName}) {
      try {
        console.log(companyId);
        const result= await  cockroach.query(`UPDATE ${TABLE_NAME}  SET name = $1 WHERE id=$2 `,[companyName,companyId])
        return result;
      } catch (error) {
        throw new Error("Error In DB Function")
      }    
       
      }
    async function deleteCompanyEntry({companyId}) {
      try {
        const result = await  cockroach.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1`,[companyId])
        return result
      } catch (error) {
        throw new Error("Error In DB Function")
      }       
      }
    async function updateCompanyById({companyId,columnValues}){
      try {
        const query=generateDynamicQuery({columnValues, conditionColumn:"id", conditionValue:companyId})
        const result = await  cockroach.query(query)
        return result
      } catch (error) {
        throw new Error("Error In DB Function")
      } 
    }

    async function createCompanyEntry({companyName}) {
      try {
        const result = await cockroach.query('INSERT INTO company(name) VALUES($1) RETURNING id', [companyName])
        return result.rows[0].id;
      } catch (error) {
        throw new Error("Error In DB Function")
      }       
    }


    function generateDynamicQuery( {columnValues, conditionColumn, conditionValue}) {
      let setClause = Object.entries(columnValues)
        .map(([column, value]) => `${column} = '${value}'`)
        .join(", ");
    
      const query = `UPDATE ${TABLE_NAME} SET ${setClause} WHERE ${conditionColumn} = '${conditionValue}';`;
      return query;
    }
    
    
  } 
  module.exports = makeCompanyDb;
  