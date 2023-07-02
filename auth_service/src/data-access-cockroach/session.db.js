const TABLE_NAME="sessions";
function makeSessionDb({cockroach,dbError}) {
    return Object.freeze({
      createSessionEntry,
      updateSessionExpiryTime,
      getSessionById,
      logoutSession,
      searchSession,
      filterSession
    });
   async function searchSession({query}) {

    try {
      const result= await cockroach.query(`select * from ${TABLE_NAME} where ${query.name}=$1`,[query.value])
      return result.rows[0];
    } catch (error) {
      throw new dbError("Error In DB Function")
    }  
  
  }
  async function filterSession({query}){

    try {
      const result= await cockroach.query(query)
      return result.rows;
    } catch (error) {
      throw new dbError("Error In DB Function")
    }  
   
  }
    async function getSessionById({session_id}) {

      try {
        const result= await cockroach.query(`select * from ${TABLE_NAME} where id=$1`,[session_id])
        return result.rows[0];
      } catch (error) {
        throw new dbError("Error In DB Function")
      }  
        
      }
    async function updateSessionExpiryTime({ session_id}) {
      try {
        const result= await  cockroach.query(`UPDATE ${TABLE_NAME}  SET expiration_time = $1  WHERE id=$2 `,[Date.now()+(60*60*1000),session_id])
        return result;
      } catch (error) {
        throw new dbError("Error In DB Function")
      } 
       
      }
    async function logoutSession({session_id}) {
      try {
        const result = await  cockroach.query(`UPDATE ${TABLE_NAME}  SET is_active = false ,expiration_time=$2 WHERE id=$1`,[session_id,'-1'])
        return result
      } catch (error) {
        throw new dbError("Error In DB Function")
      } 
       
      }    
    async function createSessionEntry({user_id,jwt_token,session_id ,user_agent,device ,ip_address,city, state,country}) {
      try {
        const result = await cockroach.query(`INSERT INTO ${TABLE_NAME}(user_id,jwt_token,id,expiration_time,user_agent,device,ip_address,city,state,country) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id`, [user_id,jwt_token,session_id,Date.now()+(60*60*1000),user_agent,device ,ip_address,city, state,country ])
        return result;
      } catch (error) {
        throw new dbError("Error In DB Function")
      }   
    }

  } 
  module.exports = makeSessionDb;
  