function makeCreateEmployee({bcrypt,runProducer,createEmployee, Joi,getCompanyIdByName, isEmployeeExist,ValidationError,ForbiddenError,Kafka }) {
  
  return async function createEmployeeFun({password,employeeName,employeeEmail,position,company_name }) {
      
      await validateInputData({employeeName,employeeEmail,position,company_name,password});
      //get company Id  using internal service call 
      const  company_id     = await getCompanyIdByName({companyName:company_name})
      //validate company id Using Joi Validation 
      await validateCompanyId({company_id})
      // validate employee details Using Joi validation
      //Check is Employee ALready Exist with same Email Using Database Validation 
      const isEmployeeExists= await isEmployeeExist({employeeEmailId:employeeEmail})
      if(isEmployeeExists.rows[0]){
        throw new ForbiddenError("Employee Already Exist With This Email")
      }
      await runProducer({topic:"EmployeeCreated",message:employeeEmail})
      // create Employee  Database 
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
     return await createEmployee({password,employeeName,employeeEmail,position,company_id }); 
  };
  async function validateCompanyId({company_id}){
    if (!company_id) {
      throw new ForbiddenError("Company With This Name Doesn't Exist");
    }
  }
  async function validateInputData({employeeName,employeeEmail,position,company_name,password}) {
    const schema = Joi.object({
      employeeName: Joi.string().min(3).required(),
      employeeEmail: Joi.string().email().required(),
      position:Joi.string().min(2).required(),
      password:Joi.string().min(5).required(),
      company_name:Joi.string().min(3).required(),
    });
    const { error,value } = schema.validate({employeeName,employeeEmail,position,password,company_name})
    if (error) {
      throw new ValidationError(error.message);
    }
    return value;
  }
}

module.exports = makeCreateEmployee;
