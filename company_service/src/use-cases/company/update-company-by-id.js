function makeUpdateCompanyByIdAction({ updateCompanyById, Joi, isCompanyExist ,ValidationError,ObjectAlreadyExistError}) {
  
    return async function updateCompanyByIdAction({ columnValues,companyId }) {

      const isCompanyExists=await isCompanyExist({companyId})
      if(!isCompanyExists){
        throw new ObjectAlreadyExistError("Company With This Id Doesn't Exists")
       } 
        //company Id and Company Name Joi validation 
      await validateInputData({companyId});
      //update company with update company db function 
      return await updateCompanyById({ columnValues,companyId });;
  
    };
    async function validateInputData({companyId}) {
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
  module.exports = makeUpdateCompanyByIdAction;
  