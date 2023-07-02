function makeEmployeeController({employeeUseCase,emailUseCase,Joi}){

    return Object.freeze({
        getAllemployee,
        deleteAllEmployeeOfCompany,
        getEmployeeById,
        createEmployee,
        updateEmployee,
        deleteEmployee,
        verifyEmployeeEmail,
        loginEmployee,
        logoutEmployee
    })
    async function logoutEmployee(req,res){
        try {
            const accessToken=req.header('accessToken')
            const result=await employeeUseCase.logoutEmployee({accessToken})
            res.status(200).json({"success":"employee logout successfully","token":result})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    } 
    async function loginEmployee(req,res){
        try {
            const employeeEmail    = req.body.employeeEmail;
            const employeePassword = req.body.position; 
            const user_agent       = req.headers['user-agent'];
            const device = req.device.type;
            const ip_address = req.socket.remoteAddress;
            const result=await employeeUseCase.loginEmployee({employeeEmail,employeePassword,user_agent,device ,ip_address})
            console.log(result);
            res.status(200).json({"success":"employee login successfully","credentials":result})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    }
    async function verifyEmployeeEmail(req,res){
        try {
            const employeeEmail=req.params.id;
            const result=await emailUseCase.verifyEmail({employeeEmail})
            res.status(200).json({"success":"email verified successfully","result":result})
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async function deleteAllEmployeeOfCompany(req,res){
        try {
            const companyId=req.params.id;
            const result=await employeeUseCase.deleteAllEmployeeByCompanyName({companyId})
            res.status(200).json({"success":"deleted","result":result})
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async function getAllemployee (req,res){
        try {
              const company_name = req.params.cname;
              const result=await employeeUseCase.getAllEmployeeAction({company_name});
              res.status(200).json(result);
         } catch (error) {
              return res.status(400).json({ error: error.message });
         }      
    }
     async function getEmployeeById(req,res){
        try {
                const id=req.params.id;
                const result=await employeeUseCase.getEmployeeByIdAction({id});
                res.status(200).json(result);
            } catch (error) {
                return res.status(400).json({ error:error.message });
            }
    }
     async function createEmployee(req,res){
        try {
            const employeeName    = req.body.employeeName;
            const employeeEmail   = req.body.employeeEmail;
            const position        = req.body.position;
            const company_name    = req.body.company_name;  
            const password        = req.body.password;
            const results         = await  employeeUseCase.createEmployeeAction({password,employeeName,employeeEmail,position,company_name})
          console.log(results.rows[0].id);
             res.status(201).send({success:results[0]})
        } catch (error) {
             res.status(400).send({error:error.message});
        }
    }
    async function deleteEmployee(req,res){
        try {
            const id=req.params.id;
            const result=await employeeUseCase.deleteEmployeeAction({id})
            res.status(204).json({"success":"deleted"})
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async function updateEmployee(req,res){
        try {
            const employeeId        = req.body.employeeId;
            const employeeName      = req.body.employeeName;
            const employeeEmail     = req.body.employeeEmail;
            const employeePossition = req.body.employeePossition;
            const password          = req.body.password;
            const company_id        = req.body.company_id
            const is_verified       = req.body.is_verified;
            const result            = await employeeUseCase.updateEmployeeAction({employeeName,employeeEmail,employeePossition,employeeId,company_id,password,is_verified})
            res.status(200).send({"success":"updated","result":result})
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
}

module.exports=makeEmployeeController