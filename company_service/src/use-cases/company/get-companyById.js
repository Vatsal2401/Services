function makeGetCompanyById({ getCompanyById, Joi, isCompanyExist ,ValidationError,ObjectAlreadyExistError}) {
  
    return async function getCompanyByIdFun({companyId }) {

        //company Id Joi validation 
        const isCompanyExists=await isCompanyExist({companyId})
      if(!isCompanyExists){
        throw new ObjectAlreadyExistError("Company With This Id Doesn't Exists")
       } 
       await validateCompanyId({companyId});
      const result = await getCompanyById({companyId});
      return result;
  
    };
    async function validateCompanyId({companyId}) {
      const schema = Joi.object({
        companyId:Joi.string().uuid(),
      });
      const { error,value } =  schema.validate({companyId});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
      
    }
  }
  
  module.exports = makeGetCompanyById;
  