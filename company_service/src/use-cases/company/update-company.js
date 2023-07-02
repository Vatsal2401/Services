function makeUpdateCompanyAction({ updateCompany, Joi, isCompanyExist ,ValidationError,ObjectAlreadyExistError}) {
  
    return async function updateCompanyAction({ companyName,companyId }) {

      const isCompanyExists=await isCompanyExist({companyId})
      if(!isCompanyExists){
        throw new ObjectAlreadyExistError("Company With This Id Doesn't Exists")
       } 
        //company Id and Company Name Joi validation 
      await validateInputData({companyName,companyId});
      //update company with update company db function 
      return await updateCompany({ companyName,companyId });;
  
    };
    async function validateInputData({companyName,companyId}) {
      const schema = Joi.object({
        companyId:Joi.string().uuid().required(),
        companyName:Joi.string().min(3).required()
      });
      const { error,value } = schema.validate({companyName,companyId});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;   
    }
  }
  module.exports = makeUpdateCompanyAction;
  