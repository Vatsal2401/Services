const {roleUseCase}=require("../use-cases")
const {AuthorizationFailed} = require('../exceptions');
const jwt=require("jsonwebtoken")
const jwtSecretKey="vatsalpatel"
function hasRole(...roles){
 return async function(req, res, next) {
    try {
        let  isAuthorize=false;
        const token = req.header('accessToken');
        if (!token) {
            res.status(401).send({ error: "Authenticate Token Required" })
        }
        const data=jwt.verify(token,jwtSecretKey)
        for (const role of roles) {
            console.log(role);
             checkRole = await roleUseCase.checkRole({employee_id:data.user_id,name:role})  
             if (checkRole) {
                isAuthorize=true;
                break;
             }
        }
       if (!isAuthorize) {
        res.status(401).send({ error: "Has Not Sufficient Permission" })
      }  else{
          next();
      }
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}
} 
module.exports=hasRole


