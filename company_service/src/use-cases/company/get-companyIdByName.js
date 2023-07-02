function makeGetCompanyIdByName({ getCompanyIdByName, Joi, isCompanyExist,ValidationError,ObjectAlreadyExistError }) {
  
    return async function getCompanyIdByNameFun({ companyName }) {
      // joi validation of company name 
       await validateCompany({companyName});
  
      const result = await getCompanyIdByName({ companyName });
      return result;
  
    };
    async function validateCompany({companyName}) {
      const schema = Joi.object({
        companyName: Joi.string().min(3).required(),
      });
      const { error,value } =  schema.validate({companyName});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;      
    }
  }
  
  module.exports = makeGetCompanyIdByName;
  