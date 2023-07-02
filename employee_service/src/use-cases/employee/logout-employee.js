function makeLogoutEmployee({logoutSession,ValidationError,ForbiddenError, }) {
  
    return async function logoutEmployeeFun({accessToken}) { 
      return await logoutSession({accessToken})
    };
  }
  module.exports = makeLogoutEmployee;
  