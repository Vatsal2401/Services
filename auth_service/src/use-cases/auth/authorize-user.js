function makeAuthorizeUser({checkPermission,updateSessionExpiryTime,getSessionById,jwt,jwtSecretKey,ValidationError,ForbiddenError }) {
  
    return async function authorizeUserFunc({accessToken,permission }) {
       const data=jwt.verify(accessToken,jwtSecretKey)
       const session=await getSessionById({session_id:data.session_id})
       if (Date.now()>session.expiration_time) {
           throw new Error("Session Expired")
       }
       await updateSessionExpiryTime({session_id:data.session_id})
      const hasPermission= await checkPermission({employee_id:data.user_id,permission})
     if (!hasPermission) {
        throw new Error("Has Not Sufficient Permission")
     } 
       return true
    };
  }
  module.exports = makeAuthorizeUser;
  