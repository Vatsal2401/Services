function makeDeleteCompanyAction({ deleteCompany,deleteAllEmployeeOfCompany,isCompanyExist,Joi,ValidationError,ObjectAlreadyExistError }) {
  
    return async function deleteCompanyAction({ companyId }) {
      const isCompanyExists=await isCompanyExist({companyId})
      if(!isCompanyExists){
        throw new ObjectAlreadyExistError("Company With This Id Doesn't Exists")
       }    
        //company Id Joi validation 
        await validateCompanyId({companyId});
       await  deleteAllEmployeeOfCompany({companyId})

      return  await  deleteCompany({ companyId });;
    };
    async function validateCompanyId({companyId}) {
      const schema = Joi.object({
        companyId:Joi.string().uuid().required(),
      });
      const { error,value } = schema.validate({companyId});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  
  module.exports = makeDeleteCompanyAction;
  