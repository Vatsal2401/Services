function makeGetAllEmployeeByCompanyName({ createEmployee, Joi,getAllEmployeeByCompanyName,getCompanyIdByName,ValidationError,ForbiddenError, isEmployeeEmailExist, Kafka }) {
  
    return async function getAllEmployeeByCompanyNameFun({company_name }) {
      const  company_id=await getCompanyIdByName({companyName:company_name})

        //company Id Joi validation 
      await validateCompanyId({company_id})
      return await getAllEmployeeByCompanyName({company_id});
  
    };
    async function validateCompanyId({company_id}){
      if (!company_id) {
        throw new ForbiddenError("Company With This Name Doesn't Exist");
      }
    }
  }
  
  module.exports = makeGetAllEmployeeByCompanyName;
  