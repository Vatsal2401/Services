const {authService}=require("../internal-service-call")
const {AuthorizationFailed} = require('../exceptions');
const permissions=require('../utilities/enum')

function authorizeUser(permission){
     return async function (req, res, next) {
      // Get the user from the jwt token and add id to req object  
      try {
          const token = req.header('accessToken');
          if (!token) {
              res.status(401).send({ error: "Authenticate Token Required" })
          }
        permission = permissions[permission]
        const isAuthorize=  await authService.authorizeUser({accessToken:token,permission})
        if (!isAuthorize) {
          res.status(401).send({ error: "Please authenticate using a valid token" })
        }
        else{
           next();
        }
      } catch (error) {
          res.status(401).send({ error: "Please authenticate using a valid token" })
      }
  
  }
}
module.exports=authorizeUser


