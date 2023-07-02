function makeDeleteAllEmployeeOfCompany({ Joi,deleteAllEmployeeByCompanyName,getCompanyIdByName,ValidationError,ForbiddenError, isEmployeeEmailExist }) {
  
    return async function deleteAllEmployeeByCompanyIdFun({companyId}) {
      //company Id Joi validation 
      await validateCompanyId({companyId});

      //delete All  Employee  using Company Name DB function 
      return await deleteAllEmployeeByCompanyName({companyId});
  
    };
    async function validateCompanyId({companyId}) {
      const schema = Joi.object({
        companyId:Joi.string().uuid(),
      });
      const { error,value } = schema.validate({companyId})
    if (error) {
      throw new ValidationError(error.message);
    }
    return value;
    }
  }
  
  module.exports = makeDeleteAllEmployeeOfCompany;
  